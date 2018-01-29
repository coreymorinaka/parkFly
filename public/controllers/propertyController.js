app.controller("propertyController", function ($scope, $state, $stateParams, propertyService, propertyManagerService) {

  $scope.initMap = function (zoom, address) {
    var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      zoom: zoom
    });
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'address': address
    },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
          map.setCenter(results[0].geometry.location);
        }
      });
  }

    // propertyManagerService.getPropertyManagers()
    // .then(function (response) {
    //     console.log(response);
    //     $scope.propertyManagers = response.data;
    // }, function (error) {
    //     console.log(error);
    // })

    if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {
        $scope.property = {
            id: null,
            locationName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            propertymanagerId: null
        }

        $scope.heading = "Add a Property!";
        $scope.submitButton = true;
    } else {
        propertyService.getPropertyById($stateParams.id)
            .then(function (response) {
                console.log(response.data);
                $scope.property = response.data;
                var address = response.data.address + ', ' + response.data.city + ', ' + response.data.state;
                console.log(address);
                $scope.initMap(13, address);
                $scope.companies = response.data.companies;
                // propManagerName();
                $scope.heading = "Update your Property's Account!";
                $scope.submitButton = false;
                console.log($scope.property);
            }, function (error) {
                console.log(error);
            })
    }

    function propManagerName() {
            for (var j = 0; j < $scope.propertyManagers.length; j++) {
                if ($scope.property.propertymanagerId == $scope.propertyManagers[j].id) {

                    var first = $scope.propertyManagers[j].firstName
                    var last = $scope.propertyManagers[j].lastName

                    $scope.property.propertymanagerId = String(first + " " + last);
                }
            }
        return $scope.properties
    }

    propertyService.getProperties()
        .then(function (response) {
            console.log(response);
            $scope.properties = response.data;
            // propManagerNames();
        }, function (error) {
            console.log(error);
        })

    function propManagerNames() {
        for (var i = 0; i < $scope.properties.length; i++) {
            for (var j = 0; j < $scope.propertyManagers.length; j++) {
                if ($scope.properties[i].propertymanagerId == $scope.propertyManagers[j].id) {

                    var first = $scope.propertyManagers[j].firstName
                    var last = $scope.propertyManagers[j].lastName

                    $scope.properties[i].propertymanagerId = String(first + " " + last);
                }
            }
        }
        return $scope.properties
    }

    $scope.addproperty = function () {
        propertyService.addproperty($scope.property)
            .then(function (response) {
                console.log(response);
                $state.go("property", { id: response.data.id });
            }, function (error) {
                console.log(error);
            })
    }

    $scope.updateProperty = function () {
        console.log($stateParams.id);
        console.log($scope.property);
        propertyService.updateProperty($scope.property.id, $scope.property)
            .then(function (response) {
                console.log(response);
                $state.go("property", { id: $stateParams.id })
            }, function (error) {
                console.log(error);
            })
    }

    $scope.deleteProperty = function () {
        propertyService.deleteProperty($scope.property.id)
            .then(function (response) {
                console.log(response);
                $state.go("properties");
            }, function (error) {
                console.log(error);
            })
    }

})