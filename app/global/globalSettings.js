(function () {
    'use strict';
    angular.module('menuMdl')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/diner/home');

            $stateProvider
                .state('dinerHome', {
                    url: '/diner/home',
                    views: {

                        '@': {
                            templateUrl: '/views/shared/_master.html' //parent view that is loaded on page load in index
                        },
                        'header@dinerHome': {
                            templateUrl: '/views/shared/_header.html'
                        },
                        'nav@dinerHome': {
                            templateUrl: '/views/shared/_nav.html'
                        },
                        '@dinerHome': {
                            templateUrl: '/views/partials/breakfast/breakfast.html'
                        }
                    }

                }).state('dinerHome.breakfast', {
                    url: '/breakfast',
                    views: {
                        'breakfastDetails@dinerHome': {
                            templateUrl: '/views/partials/breakfast/fruitLoops.html'
                        }
                    }
                });
     }]);
}());
