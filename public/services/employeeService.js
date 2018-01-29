app.service("employeeService", function ($http) {

    this.getEmployees = function () {
        return $http.get("http://localhost:3000/api/v1/employee")
    }
    this.getEmployeeById = function (id) {
        return $http.get("http://localhost:3000/api/v1/employee/" + id)
    }
    this.addEmployee = function (employee) {
        return $http.post("http://localhost:3000/api/v1/employee/", employee)
    }
    this.updateEmployee = function (id, employee) {
        return $http.put("http://localhost:3000/api/v1/employee/" + id, employee)
    }
    this.deleteEmployee = function (id) {
        return $http.delete("http://localhost:3000/api/v1/employee/" + id)
    }

    var currentUser = 0;

    this.setCurrentUser = function(x){
        currentUser = x;
    }
    this.returnCurrentUser = function(){
        return currentUser;
    }
})