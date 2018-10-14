(function (window, angular, undefined) {
    angular.module('chatApp')
        .controller('chatCtrl', ['$scope', 'userService', function ($scope, userService) {
            const vm = this;
            vm.test = "testing chat"
            vm.username = userService.username;
            vm.newMessage = '';
            vm.messages = [];

            const socket = io.connect('http://localhost:3200');
            socket.on('recieve-message', function (msg) {
                $scope.$apply(function () {
                    vm.messages.push(msg);
                });
            });

            $scope.$watch(function () {
                return userService.username
            }, function (newVal, oldVal) {
                if (newVal) {
                    vm.username = newVal;
                }
            });

            vm.submit = function (message) {
                const msg = {
                    username: vm.username,
                    text: vm.newMessage
                }
                socket.emit('new-message', msg);
                vm.newMessage = '';
            }

        }])
})(window, window.angular);