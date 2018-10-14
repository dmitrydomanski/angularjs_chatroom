angular.module('chatApp').service("userService", function () {

    this.username = undefined;

    this.setName = function (username) {
        this.username = username;
    }
});