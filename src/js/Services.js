define([
    './services/apikey',
    './services/echo-nest',
    './services/last-fm',
    './services/playlist',
    './services/youtube-api',
    './services/youtube-player',
    'angular'
], function (Apikey, EchoNest, LastfmAPI, Playlist, YoutubeAPI, YoutubePlayer) {
    return angular.module('services', [])
                    .constant('ApiKeysConf', {
                        services: ['youtube', 'soundcloud', 'echonest', 'last.fm']
                    })
                    .service('ApiKey'        , Apikey)
                    .service('echoNestAPI'   , EchoNest)
                    .service('lastfmAPI'     , LastfmAPI)
                    .service('youtubeAPI'    , YoutubeAPI)
                    .service('youtubePlayer' , YoutubePlayer)
                    .service('playList'      , Playlist);
});
