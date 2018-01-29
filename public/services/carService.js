app.service("carService", function ($http) {

    this.getCars = function () {
        return $http.get("http://localhost:3000/api/v1/car")
    }
    this.getCarById = function (id) {
        return $http.get("http://localhost:3000/api/v1/car/" + id)
    }
    this.addCar = function (car) {
        return $http.post("http://localhost:3000/api/v1/car/", car)
    }
    this.updateCar = function (id, car) {
        console.log(id, car);
        return $http.put("http://localhost:3000/api/v1/car/" + id, car)
    }
    this.deleteCar = function (id) {
        return $http.delete("http://localhost:3000/api/v1/car/" + id)
    }

    //PLATE
    this.getDataFromJson = function () { // search

        return $http.get("http://localhost:3000/api/v1/postmark/checkplate")
    }

    var _newPlateArray = [];

    this.savePlate = function (plate) {
        _newPlateArray.push(plate)
        console.log(_newPlateArray);
    }

    this.returnPlates = function () {
        return _newPlateArray
    }
})