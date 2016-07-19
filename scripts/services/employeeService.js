angular.module("employeeService", [])
    .factory('employeeDataOp', ['$http', function ($http) {

        //base url
        var urlBase = 'http://localhost:8000/';
        
        //payload
        var employeeDataOp = {};

        //get employees for list
        employeeDataOp.getEmployeeList = function (page) {
            return $http.get(urlBase + "?page=" + page);
        }
        
        //get single employee
        employeeDataOp.getEmployee = function (id) {
            return $http.get(urlBase + id)
        }

        return employeeDataOp;

}])