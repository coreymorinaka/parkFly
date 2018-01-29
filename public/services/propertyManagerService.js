app.service("propertyManagerService", function ($http) {

    this.getPropertyManagers = function () {
        return $http.get("http://localhost:3000/api/v1/propertyManager")
    }
    this.getPropertyManagerById = function (id) {
        return $http.get("http://localhost:3000/api/v1/propertyManager/" + id)
    }
    this.addPropertyManager = function (propertyManager) {
        return $http.post("http://localhost:3000/api/v1/propertyManager/", propertyManager)
    }
    this.updatePropertyManager = function (id, propertyManager) {
        return $http.put("http://localhost:3000/api/v1/propertyManager/" + id, propertyManager)
    }
    this.deletePropertyManager = function (id) {
        return $http.delete("http://localhost:3000/api/v1/propertyManager/" + id)
    }
})