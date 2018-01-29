app.service("propertyService", function ($http) {

    this.getProperties = function () {
        return $http.get("http://localhost:3000/api/v1/property")
    }
    this.getPropertyById = function (id) {
        return $http.get("http://localhost:3000/api/v1/property/" + id)
    }
    this.addProperty = function (property) {
        return $http.post("http://localhost:3000/api/v1/property/", property)
    }
    this.updateProperty = function (id, property) {
        return $http.put("http://localhost:3000/api/v1/property/" + id, property)
    }
    this.deleteProperty = function (id) {
        return $http.delete("http://localhost:3000/api/v1/property/" + id)
    }
})