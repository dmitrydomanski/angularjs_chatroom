(function (window, angular, undefined) {
    angular.module('chatApp')
        .controller('userCreateCtrl', ['$scope', 'userService', function ($scope, userService) {
            const vm = this;
            vm.test = "testing user creation controller"
            vm.username = userService.username;

            vm.submit = function(username) {
                userService.setName(username);
            }
        }])
})(window, window.angular);