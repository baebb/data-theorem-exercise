'use strict';

angular.module('dtExerciseApp')
    .controller('MainCtrl', function ($scope, PrintToConsole, employeeDataOp, departmentDataOp) {

        //filtered departments hashmap
        $scope.showDepartment = {};
        
        //initiate currentPage
        $scope.currentPage = 0;
    
        //get employees for 1st page
        getEmployeeList(1);

        //call department service for departments list
        $scope.departments = departmentDataOp.getDepartmentList();

        //change page
        $scope.pageUpdate = function (page) {
            getEmployeeList(page);
        };

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

    });