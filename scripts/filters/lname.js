'use strict';

angular.module('dtExerciseApp').filter('lname', function () {
    return function (name) {
        var fullName = name.split(", ");
        return fullName[0];
    };
});