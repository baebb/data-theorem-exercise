angular.module("employeeService", [])
    .factory('employeeDataOp', ['$http', function ($http) {

        //base url
        var urlBase = 'http://localhost:8000/';
        
        //payload
        var employeeDataOp = {};

        //get employees for page
        employeeDataOp.getEmployees = function (page) {
            
            return $http.get(urlBase + "?page=" + page);
        }

        return employeeDataOp;

}])