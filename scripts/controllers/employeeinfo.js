'use strict';

angular.module('dtExerciseApp')
    .controller('EmployeeinfoCtrl', function ($scope, $stateParams, PrintToConsole, employeeDataOp) {

        //get employee ID from URL params
        var employeeID = $stateParams.id;
    
        $scope.employee;
        getEmployee(employeeID);

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