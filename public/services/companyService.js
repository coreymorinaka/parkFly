app.service("companyService", function ($http) {

    this.getCompanies = function () {
        return $http.get("http://localhost:3000/api/v1/company")
    }
    this.getCompanyById = function (id) {
        return $http.get("http://localhost:3000/api/v1/company/" + id)
    }
    this.addCompany = function (company) {
        return $http.post("http://localhost:3000/api/v1/company/", company)
    }
    this.updateCompany = function (id, company) {
        return $http.put("http://localhost:3000/api/v1/company/" + id, company)
    }
    this.deleteCompany = function (id) {
        return $http.delete("http://localhost:3000/api/v1/company/" + id)
    }
})