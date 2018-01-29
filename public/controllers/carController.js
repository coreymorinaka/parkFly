app.controller("carController", function ($scope, $state, $stateParams, carService, employeeService, Upload, $window) {

    // employeeService.getEmployees()
    //     .then(function (response) {
    //         console.log(response);
    //         $scope.employees = response.data;
    //     }, function (error) {
    //         console.log(error);
    //     })

    function owners() {
        for (var i = 0; i < $scope.cars.length; i++) {
            for (var j = 0; j < $scope.employees.length; j++) {
                if ($scope.cars[i].employeeId == $scope.employees[j].id) {
                    var first = $scope.employees[j].firstName
                    var last = $scope.employees[j].lastName

                    $scope.cars[i].employeeId = String(first + " " + last);
                }
            }
        }
        return $scope.cars
    }

    function ownerName() {
        for (var j = 0; j < $scope.employees.length; j++) {
            if ($scope.car.employeeId == $scope.employees[j].id) {
                var ownerFirst = $scope.employees[j].firstName
                var ownerLast = $scope.employees[j].lastName
                $scope.car.employeeId = String(ownerFirst + " " + ownerLast);
            }
        }
        return $scope.car;
    }

    if ($stateParams.id == null || $stateParams.id == "" || $stateParams.id == undefined) {

        $scope.company = {
            id: null,
            make: "",
            model: "",
            year: "",
            color: "",
            licensePlate: "",
            permitNumber: "",
            propertyId: null
        }
        $scope.heading = "Add a Car!";
        $scope.submitButton = true;
    } else {
        carService.getCarById($stateParams.id)
            .then(function (response) {
                $scope.car = response.data;
                // ownerName();
                $scope.heading = "Update your car!";
                $scope.submitButton = false;
                console.log(response.data);
                console.log($scope.car);
            }, function (error) {
                console.log(error);
            })
    }

    carService.getCars()
        .then(function (response) {
            $scope.cars = response.data;
            // owners();
            console.log(response);
        }, function (error) {
            console.log(error);
        })

    $scope.addCar = function () {
        console.log($scope.car);
        carService.addCar($scope.car)
            .then(function (response) {
                console.log(response);
                $state.go("car", { id: response.data.id });
            }, function (error) {
                console.log(error);
            })
    }

    $scope.updateCar = function () {
        carService.updateCar($scope.car.id, $scope.car)
            .then(function (response) {
                console.log($scope.car.id, $scope.car);
                console.log(response);
                $state.go("car", { id: response.data.id })
            }, function (error) {
                console.log(error);
            })
    }

    $scope.deleteCar = function () {
        carService.deleteCar($scope.car.id)
            .then(function (response) {
                console.log(response);
                $state.go("cars");
            }, function (error) {
                console.log(error);
            })
    }

    $scope.display = function (name) {
        console.log(name);
        var x = document.getElementById(name);
        if (x.style.display === "none") {
            x.style.display = "block";
            $scope.showbutton = true;
        } else {
            x.style.display = "none";
        }
    }

    $scope.bc = {
        format: 'CODE128',
        lineColor: '#000000',
        width: 2,
        height: 100,
        displayValue: true,
        fontOptions: '',
        font: 'monospace',
        textAlign: 'center',
        textPosition: 'bottom',
        textMargin: 2,
        fontSize: 20,
        background: '#ffffff',
        margin: 0,
        marginTop: undefined,
        marginBottom: undefined,
        marginLeft: undefined,
        marginRight: undefined,
        valid: function (valid) {
        }
    }

    var vm = this;

    //function to call on form submit

    $scope.submit = function () {
        //$scope.car.licensePlate = "bbb";
        //console.log('license: ' + $scope.car.licensePlate);
        //console.log($scope.car.permitNumber);
        if (vm.upload_form.file.$valid && vm.file) {
            $scope.upload(vm.file);
        }
    }

    var newImagename = ""
    $scope.plateArray = [];
    // $scope.car = {};
    // $scope.car.licensePlate = "aaa";
    $scope.upload = function (file) {
        
        Upload.upload({
            url: 'http://localhost:3000/api/v1/postmark/checkplate/',
            data: { file: file } // pass file as data, should be user ng-model
        })
            .then(function (resp) { //upload function returns a promise
                console.log(resp)
                if (resp.status === 200) { //validate success
                    //$window.alert('Success ' + resp.config.data.file.name + ' uploaded.');
                    $scope.car.permitNumber = resp.data.new_filename;
                    console.log($scope.newImagename);
                    $scope.car.licensePlate = resp.data.results['0'].plate;
                    console.log($scope.car);
              
                    // $scope.plateArray.push($scope.carPlate)
                    // carService.savePlate($scope.carPlate)
                }
                else {
                    $window.alert('an error occured');
                }
            },
            function (error) {
                console.log('Error status: ' + error.status);
                $window.alert('Error status: ' + error.status);
            })
    };

})