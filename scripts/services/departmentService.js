angular.module("departmentService", [])
    .factory('departmentDataOp', function () {

        //payload
        var departmentDataOp = {};

        //list of departments
        departmentDataOp.getDepartmentList = function () {
            return (["WATER MGMNT", "POLICE", "GENERAL SERVICES", "CITY COUNCIL", "STREETS & SAN", "OEMC", "AVIATION", "FIRE", "FAMILY & SUPPORT", "IPRA", "PUBLIC LIBRARY", "BUSINESS AFFAIRS", "TRANSPORTN", "HEALTH", "MAYOR'S OFFICE"])
        }

        return departmentDataOp;
    })