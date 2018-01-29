var app = angular.module("parkFlyApp", ["ui.router", "jcs-autoValidate", 'angular-barcode', 'ngFileUpload'])

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "carController"
        })

        //Car
        .state("cars", {
            url: "/cars",
            templateUrl: "./views/cars.html",
            controller: "carController"
        })
        .state("newCar", {
            url: "/car/new",
            templateUrl: "./views/car-form.html",
            controller: "carController"
        })
        .state("car", {
            url: "/car/:id",
            templateUrl: "./views/car.html",
            controller: "carController"
        })
        .state("editCar", {
            url: "/car/:id/update",
            templateUrl: "./views/car-form.html",
            controller: "carController"
        })
        //Employee
        .state("employees", {
            url: "/employees",
            templateUrl: "./views/employees.html",
            controller: "employeeController"
        })
        .state("newEmployee", {
            url: "/employee/new",
            templateUrl: "./views/employee-form.html",
            controller: "employeeController"
        })
        .state("loginEmployee", {
            url: "/employee/login",
            templateUrl: "./views/employeeLogin.html",
            controller: "employeeController"
        })
        .state("employee", {
            url: "/employee/:id",
            templateUrl: "./views/employee.html",
            controller: "employeeController"
        })
        .state("employeeLimited", {
            url: "/employeeLimited/:id",
            templateUrl: "./views/employeeLimited.html",
            controller: "employeeController"
        })
        .state("editEmployee", {
            url: "/employee/:id/update",
            templateUrl: "./views/employee-form.html",
            controller: "employeeController"
        })
        //Company
        .state("companies", {
            url: "/companies",
            templateUrl: "./views/companies.html",
            controller: "companyController"
        })
        .state("newCompany", {
            url: "/company/new",
            templateUrl: "./views/company-form.html",
            controller: "companyController"
        })
        .state("company", {
            url: "/company/:id",
            templateUrl: "./views/company.html",
            controller: "companyController"
        })
        .state("editCompany", {
            url: "/company/:id/update",
            templateUrl: "./views/company-form.html",
            controller: "companyController"
        })
        //Property
        .state("properties", {
            url: "/properties",
            templateUrl: "./views/properties.html",
            controller: "propertyController"
        })
        .state("newProperty", {
            url: "/property/new",
            templateUrl: "./views/property-form.html",
            controller: "propertyController"
        })
        .state("property", {
            url: "/property/:id",
            templateUrl: "./views/property.html",
            controller: "propertyController"
        })
        .state("editProperty", {
            url: "/property/:id/update",
            templateUrl: "./views/property-form.html",
            controller: "propertyController"
        })
        //Property Manager
        .state("propertyManagers", {
            url: "/propertyManagers",
            templateUrl: "./views/propertyManagers.html",
            controller: "propertyManagerController"
        })
        .state("newPropertyManager", {
            url: "/propertyManager/new",
            templateUrl: "./views/propertyManager-form.html",
            controller: "propertyManagerController"
        })
        .state("loginPropertyManager", {
            url: "/propertyManager/login",
            templateUrl: "./views/propertyManagerLogin.html",
            controller: "propertyManagerController"
        })
        .state("propertyManager", {
            url: "/propertyManager/:id",
            templateUrl: "./views/propertyManager.html",
            controller: "propertyManagerController"
        })
        .state("editPropertyManager", {
            url: "/propertyManager/:id/update",
            templateUrl: "./views/propertyManager-form.html",
            controller: "propertyManagerController"
        })
})