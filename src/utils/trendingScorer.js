import moment from 'moment'
import TimeRange from 'models/TimeRange'

// eslint-disable-next-line
var _0xdf4a=["\x57\x45\x45\x4B","\x4D\x4F\x4E\x54\x48","\x59\x45\x41\x52","\x74\x72\x61\x63\x6B\x5F\x6F\x77\x6E\x65\x72\x5F\x66\x6F\x6C\x6C\x6F\x77\x65\x72\x5F\x63\x6F\x75\x6E\x74","\x6C\x69\x73\x74\x65\x6E\x73","\x77\x69\x6E\x64\x6F\x77\x65\x64\x5F\x72\x65\x70\x6F\x73\x74\x5F\x63\x6F\x75\x6E\x74","\x77\x69\x6E\x64\x6F\x77\x65\x64\x5F\x73\x61\x76\x65\x5F\x63\x6F\x75\x6E\x74","\x72\x65\x70\x6F\x73\x74\x5F\x63\x6F\x75\x6E\x74","\x73\x61\x76\x65\x5F\x63\x6F\x75\x6E\x74","\x63\x72\x65\x61\x74\x65\x64\x5F\x61\x74","\x64\x61\x79\x73","\x64\x69\x66\x66","\x70\x6F\x77","\x6D\x61\x78","\x6B\x61\x72\x6D\x61","\x74\x72\x61\x63\x6B\x5F\x69\x64"];const LISTEN_MULTIPLER=1;const WINDOWED_REPOST_MULTIPLER=50;const WINDOWED_SAVE_MULTIPLIER=1;const ALL_TIME_REPOST_MULTIPLER=0.25;const ALL_TIME_SAVE_MULTIPLER=0.01;const CREATED_AT_MULTIPLIER=20.0;const TIME_RANGE_MAPPING={[TimeRange[_0xdf4a[0]]]:7,[TimeRange[_0xdf4a[1]]]:30,[TimeRange[_0xdf4a[2]]]:365};const now=moment();export const getTrendingScore=(_0xbf82xa,_0xbf82xb)=>{if(_0xbf82xa[_0xdf4a[3]]< 3){return 0};const _0xbf82xc=LISTEN_MULTIPLER* _0xbf82xa[_0xdf4a[4]]+ WINDOWED_REPOST_MULTIPLER* _0xbf82xa[_0xdf4a[5]]+ WINDOWED_SAVE_MULTIPLIER* _0xbf82xa[_0xdf4a[6]]+ ALL_TIME_REPOST_MULTIPLER* _0xbf82xa[_0xdf4a[7]]+ ALL_TIME_SAVE_MULTIPLER* _0xbf82xa[_0xdf4a[8]];const _0xbf82xd=moment(_0xbf82xa[_0xdf4a[9]]);const _0xbf82xe=now[_0xdf4a[11]](_0xbf82xd,_0xdf4a[10]);let _0xbf82xf;if(_0xbf82xe< TIME_RANGE_MAPPING[_0xbf82xb]){_0xbf82xf= 1}else {_0xbf82xf= Math[_0xdf4a[13]](1.0/ CREATED_AT_MULTIPLIER,Math[_0xdf4a[12]](CREATED_AT_MULTIPLIER,1- _0xbf82xe/ TIME_RANGE_MAPPING[_0xbf82xb]))};return _0xbf82xc* _0xbf82xf* _0xbf82xa[_0xdf4a[14]]};export const sortByTrendingScore=(_0xbf82xb)=>(_0xbf82x11,_0xbf82x12)=>{const _0xbf82x13=getTrendingScore(_0xbf82x11,_0xbf82xb);const _0xbf82x14=getTrendingScore(_0xbf82x12,_0xbf82xb);if(_0xbf82x13=== _0xbf82x14){return _0xbf82x12[_0xdf4a[15]]- _0xbf82x11[_0xdf4a[15]]};return _0xbf82x14- _0xbf82x13}