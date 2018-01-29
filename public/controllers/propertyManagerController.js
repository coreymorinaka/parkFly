app.controller("propertyManagerController", function ($scope, $state, $stateParams, propertyManagerService) {

    if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
        $scope.propertyManager = {
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            companyId: null
        }

        $scope.heading = "Add a Property Manager!";
        $scope.submitButton = true;
    } else {
        propertyManagerService.getPropertyManagerById($stateParams.id)
            .then(function (response) {
                console.log(response.data);
                $scope.propertyManager = response.data;
                $scope.properties = response.data.properties;
                $scope.heading = "Update your Property Manager Account!";
                $scope.submitButton = false;
                console.log($scope.propertyManager);
            }, function (error) {
                console.log(error);
            })
    }

    propertyManagerService.getPropertyManagers()
        .then(function (response) {
            console.log(response);
            $scope.propertyManagers = response.data;
        }, function (error) {
            console.log(error);
        })

    $scope.addPropertyManager = function () {
        propertyManagerService.addPropertyManager($scope.propertyManager)
            .then(function (response) {
                console.log(response);
                $state.go("propertyManager", { id: response.data.id });
            }, function (error) {
                console.log(error);
            })
    }

    $scope.updatePropertyManager = function () {
        propertyManagerService.updatePropertyManager($scope.propertyManager.id, $scope.propertyManager)
            .then(function (response) {
                console.log(response);
                $state.go("propertyManager", { id: $stateParams.id })
            }, function (error) {
                console.log(error);
            })
    }

    $scope.deletePropertyManager = function () {
        propertyManagerService.deletePropertyManager($scope.propertyManager.id)
            .then(function (response) {
                console.log(response);
                $state.go("propertyManagers");
            }, function (error) {
                console.log(error);
            })
    }

    $scope.propertyManagerLogin = function () {
        console.log($scope.propertyManagers[1]);
        console.log($scope.propManager);
        for(var i = 0; i < $scope.propertyManagers.length; i++) {
            // console.log($scope.propertyManagers[i]);
            if($scope.propertyManagers[i].email == $scope.propManager.email &&           $scope.propertyManagers[i].password == $scope.propManager.password){
                $state.go("properties");
                console.log('true');
            }
        }
    }

})