app.controller("indexController", function ($scope, $state, $stateParams, employeeService) {

    $scope.employeeService = employeeService;

    $scope.logOut = function () {
        employeeService.setCurrentUser(0);
    }
})