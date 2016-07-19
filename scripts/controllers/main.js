'use strict';

angular.module('dtExerciseApp')
    .controller('MainCtrl', function ($scope, PrintToConsole, employeeDataOp) {

        //debugging service
        $scope.debugger = PrintToConsole;

        $scope.showDepartment = {};
        $scope.employees;
        $scope.currentPage = 0;
        getEmployees(1);

        function getEmployees(page) {
            
            //clear employees
            $scope.employees = [];

            //set current page to requested page
            $scope.currentPage = page;

            //call employees service for page
            employeeDataOp.getEmployees(page)
                .success(function (data) {
                    $scope.employees = data;
                })
                .error(function (error) {
                    console.log('Unable to get employee data:' + error.message)
                })
        }

        //change page
        $scope.pageUpdate = function (page) {
            getEmployees(page);
        };

        //    $scope.departments = departmentList;

        $scope.departments = ["WATER MGMNT", "POLICE", "GENERAL SERVICES", "CITY COUNCIL", "STREETS & SAN", "OEMC", "AVIATION", "FIRE", "FAMILY & SUPPORT", "IPRA", "PUBLIC LIBRARY", "BUSINESS AFFAIRS", "TRANSPORTN", "HEALTH", "MAYOR'S OFFICE"];

    });