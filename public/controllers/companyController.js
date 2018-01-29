app.controller("companyController", function ($scope, $state, $stateParams, companyService, propertyService) {

    // propertyService.getProperties()
    // .then(function (response) {
    //     console.log(response);
    //     $scope.properties = response.data;
    // }, function (error) {
    //     console.log(error);
    // })

    if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
        $scope.car = {
            id: null,
            companyName: "",
            companyAddress: "",
            companyEmail: "",
            companyPhone: "",
            companySuiteNumber: "",
            companyContact: "",
            companyMaxSpaces: "",
            companyId: null
        }

        $scope.heading = "Add a Company!";
        $scope.submitButton = true;
    } else {
        companyService.getCompanyById($stateParams.id)
            .then(function (response) {
                console.log(response.data);
                $scope.company = response.data;
                $scope.employees = response.data.employees;
                // propName();
                $scope.heading = "Update your Company Account!";
                $scope.submitButton = false;
                console.log($scope.company);
            }, function (error) {
                console.log(error);
            })
    }

    function propName(){
            for(var j = 0; j < $scope.properties.length; j++){
                if($scope.company.propertyId == $scope.properties[j].id){

                    $scope.company.propertyId = $scope.properties[j].locationName;
                }
            }
        return $scope.company;
    }

    companyService.getCompanies()
        .then(function (response) {
            console.log(response);
            $scope.companies = response.data;
            // propNames();
        }, function (error) {
            console.log(error);
        })
        
        

        function propNames(){
            for(var i = 0; i < $scope.companies.length; i++){
                for(var j = 0; j < $scope.properties.length; j++){
                    if($scope.companies[i].propertyId == $scope.properties[j].id){

                        $scope.companies[i].propertyId = $scope.properties[j].locationName;
                    }
                }
            }
            return $scope.companies;
        }

    $scope.addCompany = function () {
        companyService.addCompany($scope.company)
            .then(function (response) {
                console.log(response);
                $state.go("company", { id: response.data.id });
            }, function (error) {
                console.log(error);
            })
    }

    $scope.updateCompany = function () {
        console.log($stateParams.id);
        console.log($scope.company);
        companyService.updateCompany($scope.company.id, $scope.company)
            .then(function (response) {
                console.log(response);
                $state.go("company", { id: $stateParams.id })
            }, function (error) {
                console.log(error);
            })
    }

    $scope.deleteCompany = function () {
        companyService.deleteCompany($scope.company.id)
            .then(function (response) {
                console.log(response);
                $state.go("companies");
            }, function (error) {
                console.log(error);
            })
    }

})