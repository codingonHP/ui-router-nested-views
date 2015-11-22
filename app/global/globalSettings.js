(function () {
    'use strict';
    angular.module('menuMdl')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
            $stateProvider.state('index', {
                url: '/index',
                views: {
                    header: {
                        templateUrl: '/views/shared/_header.html'
                    },
                    nav: {
                        templateUrl: '/views/shared/_nav.html'
                    }
                }
            });
     }]);
}());
