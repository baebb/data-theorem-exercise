angular.module("employeeService", [])
.factory('employeeDataOp', ['$http', function ($http) {
    
    var urlBase = 'http://localhost:8000/';
    var employeeDataOp = {};
    
    employeeDataOp.getEmployees = function () {
        return $http.get(urlBase);
    }
    
    return employeeDataOp;

}])