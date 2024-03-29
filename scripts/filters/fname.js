'use strict';

angular.module('dtExerciseApp').filter('fname', function () {
    return function (name) {
        
        //split fullname
        var fullName = name.split(", ");
        
        //remove middle initial if exists 
        if (fullName[1].charAt(fullName[1].length - 2) == " ") {
            return fullName[1].slice(0,-2);
        } else {
            return fullName[1];
        }
    };
});