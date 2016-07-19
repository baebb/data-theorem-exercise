'use strict';

angular.module('dtExerciseApp')
    .controller('NewemployeeCtrl', function ($scope, employeeDataOp, departmentDataOp) {
    
        //call department service for departments list
        $scope.departments = departmentDataOp.getDepartmentList();

        $scope.save = function (employee) {
            if ($scope.employeeForm.$valid) {
                //create employee name that fits database structure
                employee.name = employee.lName + ", " + employee.fName;

                //create employee salary that fits database structure
                employee.employee_annual_salary = employee.salary + ".00";

                //remove irrelevant data from employee object
                delete employee.fName;
                delete employee.lName;
                delete employee.salary;

                //call employee service to add employee object
                addEmployee(employee);
                
                //show success message
                $scope.success = true;

                //clear form inputs and reset validation
                $scope.employee = {};
                $scope.submitted = false;
                $scope.employeeForm.$setPristine();
                $scope.employeeForm.$setUntouched();
            } else {
                //hide success message
                $scope.success = false;

                //flag for form validation
                $scope.submitted = true;
            }
        };

        function addEmployee(data) {
            employeeDataOp.addEmployee(data)
                .success(function (res) {
                    console.log(res);
                })
                .error(function (error) {
                    console.log('Unable to post employee data:' + error.message)
                })
        }

    });