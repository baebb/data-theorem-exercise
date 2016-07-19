'use strict';

//angular.module('dtExerciseApp', ['employeeService'])
//    .controller('MainCtrl', function ($scope, employeeDataOp) {
angular.module('dtExerciseApp')
    .controller('MainCtrl', function ($scope, PrintToConsole, employeeDataOp) {

        $scope.debugger = PrintToConsole;

        $scope.showDepartment = {};
        $scope.employees;
        getEmployees();

        function getEmployees() {
            employeeDataOp.getEmployees()
                .success(function (data) {
                    $scope.employees = data;
                })
                .error(function (error) {
                    console.log('Unable to get employee data:' + error.message)
                })
        }


        $scope.employees2 = [
            {
                "department": "WATER MGMNT",
                "employee_annual_salary": "90744.00",
                "id": 1,
                "job_titles": "WATER RATE TAKER",
                "name": "AARON,  ELVIA J"
    },
            {
                "department": "POLICE",
                "employee_annual_salary": "84450.00",
                "id": 2,
                "job_titles": "POLICE OFFICER",
                "name": "AARON,  JEFFERY M"
    },
            {
                "department": "POLICE",
                "employee_annual_salary": "84450.00",
                "id": 3,
                "job_titles": "POLICE OFFICER",
                "name": "AARON,  KARINA"
    },
            {
                "department": "GENERAL SERVICES",
                "employee_annual_salary": "89880.00",
                "id": 4,
                "job_titles": "CHIEF CONTRACT EXPEDITER",
                "name": "AARON,  KIMBERLEI R"
    },
            {
                "department": "WATER MGMNT",
                "employee_annual_salary": "106836.00",
                "id": 5,
                "job_titles": "CIVIL ENGINEER IV",
                "name": "ABAD JR,  VICENTE M"
    }
];

        //    $scope.departments = departmentList;

        $scope.departments = ["WATER MGMNT", "POLICE", "GENERAL SERVICES", "CITY COUNCIL", "STREETS & SAN", "OEMC", "AVIATION", "FIRE", "FAMILY & SUPPORT", "IPRA", "PUBLIC LIBRARY", "BUSINESS AFFAIRS", "TRANSPORTN", "HEALTH", "MAYOR'S OFFICE"];

    });