import React, { useEffect, useContext } from 'react'
import { ReactComponent as IconRemixes } from 'assets/img/iconRemix.svg'
import { ReactComponent as IconVerified } from 'assets/img/iconVerified.svg'

import MobilePageContainer from 'components/general/MobilePageContainer'
import Header from 'components/general/header/mobile/Header'
import { HeaderContext } from 'components/general/header/mobile/HeaderContextProvider'
import Lineup, { LineupWithoutTile } from 'containers/lineup/Lineup'
import { withNullGuard } from 'utils/withNullGuard'
import Track from 'models/Track'
import User from 'models/User'
import { useSubPageHeader } from 'containers/nav/store/context'

import styles from './RemixesPage.module.css'
import { pluralize } from 'utils/formatUtil'
import { fullTrackRemixesPage } from 'utils/route'

const messages = {
  remixes: 'Remix',
  by: 'by',
  of: 'of',
  getDescription: (trackName: string, artistName: string) =>
    `${messages.remixes} ${messages.of} ${trackName} ${messages.by} ${artistName}`
}

export type RemixesPageProps = {
  title: string
  count: number | null
  originalTrack: Track | null
  user: User | null
  getLineupProps: () => LineupWithoutTile
  goToTrackPage: () => void
  goToArtistPage: () => void
}

const g = withNullGuard(
  ({ originalTrack, user, ...p }: RemixesPageProps) =>
    originalTrack && user && { ...p, originalTrack, user }
)

const RemixesPage = g(
  ({
    title,
    count,
    originalTrack,
    user,
    getLineupProps,
    goToTrackPage,
    goToArtistPage
  }) => {
    useSubPageHeader()

    const { setHeader } = useContext(HeaderContext)
    useEffect(() => {
      setHeader(
        <>
          <Header
            className={styles.header}
            title={
              <>
                <IconRemixes className={styles.iconRemix} />
                <span>{title}</span>
              </>
            }
          />
        </>
      )
    }, [setHeader, title, originalTrack, user, goToArtistPage, goToTrackPage])

    return (
      <MobilePageContainer
        title={title}
        description={messages.getDescription(originalTrack.title, user.name)}
        canonicalUrl={fullTrackRemixesPage(
          user.handle,
          originalTrack.title,
          originalTrack.track_id
        )}
        containerClassName={styles.container}
      >
        <div className={styles.tracksContainer}>
          <div className={styles.subHeader}>
            {`${count || ''} ${pluralize(
              messages.remixes,
              count,
              'es',
              !count
            )} ${messages.of}`}
            <div className={styles.track}>
              <div className={styles.link} onClick={goToTrackPage}>
                {originalTrack.title}
              </div>
              {messages.by}
              <div className={styles.link} onClick={goToArtistPage}>
                {user.name}
                {user.is_verified && (
                  <IconVerified className={styles.iconVerified} />
                )}
              </div>
            </div>
          </div>
          <Lineup {...getLineupProps()} />
        </div>
      </MobilePageContainer>
    )
  }
)

export default RemixesPage
