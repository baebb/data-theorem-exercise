'use strict';

angular.module('dtExerciseApp').filter('filterDepartment', function () {
    return function (employees, criteria) {
        var departments = Object.keys(criteria).filter(function (c) {
            return criteria[c];
        });

        if (departments.length === 0) {
            return employees;
        }

        employees = employees.filter(function (employee) {
            return departments.indexOf(employee.department) >= 0;
        });

        console.log(employees);

        return employees;
    };
});