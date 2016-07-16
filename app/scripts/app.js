'use strict';


angular.module('dtExerciseApp', [
  'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'navbar': {
                        templateUrl: 'views/navbar.html',
                        controller: 'NavbarCtrl'
                    },
                    'page': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('/employeeinfo', {
                views: {
                    'navbar': {
                        templateUrl: 'views/navbar.html',
                        controller: 'NavbarCtrl'
                    },
                    'page': {
                        templateUrl: 'views/employeeinfo.html',
                        controller: 'EmployeeinfoCtrl'
                    }
                }
            })
            .state('/newemployee', {
                views: {
                    'navbar': {
                        templateUrl: 'views/navbar.html',
                        controller: 'NavbarCtrl'
                    },
                    'page': {
                        templateUrl: 'views/newemployee.html',
                        controller: 'NewemployeeCtrl'
                    }
                }
            })
    })