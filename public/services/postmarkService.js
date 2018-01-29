app.service("postmarkService", function ($http) {
    //POSTMARK
    this.sendEmail = function (email) {
        return $http.post("http://localhost:3000/api/v1/postmark/send", email)
    }
    this.sendMove = function (email) {
        return $http.post("http://localhost:3000/api/v1/postmark/move", email)
    }
    this.sendTow = function (email) {
        return $http.post("http://localhost:3000/api/v1/postmark/tow", email)
    }
    this.sendMaintenance = function (email) {
        return $http.post("http://localhost:3000/api/v1/postmark/maintenance", email)
    }
})