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
        
        //add new employee
        employeeDataOp.addEmployee = function (data) {
            return $http.post(urlBase, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
        }

        return employeeDataOp;

}])