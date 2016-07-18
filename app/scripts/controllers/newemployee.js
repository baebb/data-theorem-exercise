'use strict';

angular.module('dtExerciseApp')
    .controller('NewemployeeCtrl', function ($scope) {

        //    $scope.departments = departmentList;

        $scope.departments = ["WATER MGMNT", "POLICE", "GENERAL SERVICES", "CITY COUNCIL", "STREETS & SAN", "OEMC", "AVIATION", "FIRE", "FAMILY & SUPPORT", "IPRA", "PUBLIC LIBRARY", "BUSINESS AFFAIRS", "TRANSPORTN", "HEALTH", "MAYOR'S OFFICE"];

        $scope.master = {};

        $scope.save = function (employee) {
            $scope.submitted = true;
//            $scope.master = angular.copy(employee);
//        console.log("employee:" + employee.fName)
        };


    });