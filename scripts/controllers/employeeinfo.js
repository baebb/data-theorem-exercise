'use strict';

angular.module('dtExerciseApp')
    .controller('EmployeeinfoCtrl', function ($scope, $stateParams, PrintToConsole, employeeDataOp) {

        $scope.employee;
        getEmployee(employeeID);

        //get employee ID from URL params
        var employeeID = $stateParams.id;

        //Get single employee data
        function getEmployee(employeeID) {
            employeeDataOp.getEmployee(employeeID)
                .success(function (data) {
                    $scope.rendered = true;
                    $scope.employee = data;
                    //                console.log(data);
                })
                .error(function (error) {
                    console.log('Unable to get employee data:' + error.message)
                })
        }

    });