'use strict';

angular.module('dtExerciseApp').filter('filterDepartment', function () {
    return function (employees, criteria) {
        //get filtered departments hashmap
        var departments = Object.keys(criteria).filter(function (c) {
            return criteria[c];
        });
        
        //if no filters display all employees
        if (departments.length === 0) {
            return employees;
        }

        //only return employees of filtered departments
        employees = employees.filter(function (employee) {
            return departments.indexOf(employee.department) >= 0;
        });

        return employees;
    };
});