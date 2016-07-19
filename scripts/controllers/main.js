'use strict';

angular.module('dtExerciseApp')
    .controller('MainCtrl', function ($scope, PrintToConsole, employeeDataOp) {
    
        //filtered departments hashmap
        $scope.showDepartment = {};
    
        $scope.employees;
        $scope.currentPage = 0;
        getEmployeeList(1);

        function getEmployeeList(page) {
            //clear view of old employees
            $scope.employees = [];

            //set current page to requested page
            $scope.currentPage = page;

            //call employees service for page
            employeeDataOp.getEmployeeList(page)
                .success(function (data) {
                    $scope.employees = data;
                })
                .error(function (error) {
                    console.log('Unable to get employee data:' + error.message)
                })
        }

        //change page
        $scope.pageUpdate = function (page) {
            getEmployeeList(page);
        };

        //    $scope.departments = departmentList;

        $scope.departments = ["WATER MGMNT", "POLICE", "GENERAL SERVICES", "CITY COUNCIL", "STREETS & SAN", "OEMC", "AVIATION", "FIRE", "FAMILY & SUPPORT", "IPRA", "PUBLIC LIBRARY", "BUSINESS AFFAIRS", "TRANSPORTN", "HEALTH", "MAYOR'S OFFICE"];

    });