'use strict';

angular.module('dtExerciseApp').filter('lname', function () {
    return function (name) {
        
        //split fullname
        var fullName = name.split(", ");
        return fullName[0];
    };
});