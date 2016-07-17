'use strict';


angular.module('dtExerciseApp', [
  'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {

        // if route is not found
        $urlRouterProvider.otherwise('/');

        // set our apt our app to have pretty URLS
//        $locationProvider.html5Mode(true);
    
        $stateProvider
            .state('main', {
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
        
            .state('employeeinfo', {
                url: '/employeeinfo',
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
        
            .state('newemployee', {
                url: '/newemployee',
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