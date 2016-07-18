'use strict';

angular.module('dtExerciseApp')
    .controller('EmployeeinfoCtrl', function ($scope) {

        $scope.employee = {
            "department": "WATER MGMNT",
            "employee_annual_salary": "90744.00",
            "id": 1,
            "job_titles": "WATER RATE TAKER",
            "name": "AARON,  ELVIA J"
        };

    });