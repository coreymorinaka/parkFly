app.controller("employeeController", function ($scope, $state, $stateParams, employeeService, companyService, postmarkService) {

    // companyService.getCompanies()
    //     .then(function (response) {
    //         console.log(response);
    //         $scope.companies = response.data;
    //     }, function (error) {
    //         console.log(error);
    //     })

    if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
        $scope.employee = {
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cellNumber: "",
            companyId: null
        }

        $scope.heading = "Add an Employee!";
        $scope.submitButton = true;
    } else {
        employeeService.getEmployeeById($stateParams.id)
            .then(function (response) {
                console.log(response.data);
                $scope.employee = response.data;
                $scope.cars = response.data.cars;
                console.log($scope.cars);
                // compName();
                $scope.heading = "Update your Employee Account!";
                $scope.submitButton = false;
                console.log($scope.employee);
            }, function (error) {
                console.log(error);
            })
    }

    employeeService.getEmployees()
        .then(function (response) {
            console.log(response);
            $scope.employees = response.data;
            // compNames();
        }, function (error) {
            console.log(error);
        })

    function compNames() {
        for (var i = 0; i < $scope.employees.length; i++) {
            for (var j = 0; j < $scope.companies.length; j++) {
                if ($scope.employees[i].companyId == $scope.companies[j].id) {

                    $scope.employees[i].companyId = $scope.companies[j].companyName
                }
            }
        }
        return $scope.employees
    }

    function compName() {
        for (var j = 0; j < $scope.companies.length; j++) {
            if ($scope.employee.companyId == $scope.companies[j].id) {

                $scope.employee.companyId = $scope.companies[j].companyName;
            }
        }
        return $scope.employee;
    }

    $scope.addEmployee = function () {
        employeeService.addEmployee($scope.employee)
            .then(function (response) {
                console.log(response.data.email);
                console.log(response);
                $state.go("employee", { id: response.data.id });
            }, function (error) {
                console.log(error);
            })
    }

    $scope.sendEmail = function () {
        postmarkService.sendEmail($scope.employee)
            .then(function (response) {
                console.log(response)
            }, function (error) {
                console.log(error)
            })
    }
    $scope.sendMove = function () {
        postmarkService.sendMove($scope.employee)
            .then(function (response) {
                console.log(response)
            }, function (error) {
                console.log(error)
            })
    }
    $scope.sendTow = function () {
        postmarkService.sendTow($scope.employee)
            .then(function (response) {
                console.log(response)
            }, function (error) {
                console.log(error)
            })
    }
    $scope.sendMaintenance = function () {
        postmarkService.sendMaintenance($scope.employee)
            .then(function (response) {
                console.log(response)
            }, function (error) {
                console.log(error)
            })
    }

    $scope.updateEmployee = function () {
        employeeService.updateEmployee($scope.employee.id, $scope.employee)
            .then(function (response) {
                console.log(response);
                $state.go("employee", { id: $stateParams.id })
            }, function (error) {
                console.log(error);
            })
    }

    $scope.deleteEmployee = function () {
        employeeService.deleteEmployee($scope.employee.id)
            .then(function (response) {
                console.log(response);
                $state.go("employees");
            }, function (error) {
                console.log(error);
            })
    }

    $scope.employeeLogin = function () {
        for (var i = 0; i < $scope.employees.length; i++) {
            if ($scope.employees[i].email == $scope.employee.email && $scope.employees[i].password == $scope.employee.password) {
                $state.go("employeeLimited", { id: $scope.employees[i].id });
                employeeService.setCurrentUser(1);
            }
        }
    }
})