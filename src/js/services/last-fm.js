define([
    'angular'
], function () {
    var baseUrl = 'http://ws.audioscrobbler.com/2.0/';

    return ['$rootScope', '$http', 'ApiKey', function ($rootScope, $http, ApiKey) {
        function request (method, params) {
            var apikey = ApiKey.get('last.fm'),
                url = baseUrl;

            if (!apikey)
                throw ReferenceError('No API key was found for last.fm service');

            params.method = method;
            params.format = 'json';

            return $http.get(url, { params: params });
        }

        this.getTrackInfo = function (track, artist) {

        };

        this.getArtistInfo = function (artist) {

        };

        this.getTrackSimilar = function (track, artist, limit) {

        };

        this.getArtistSimilar = function (artist, limit) {

        };
    }];
});

