angular.module('hyq.controllers', [])

    .controller('FeedCtrl', function($scope) {})

    .controller('FriendCtrl', function($scope, Chats) {
        $scope.chats = Chats.all();

        $scope.remove = function(chat) {
          Chats.remove(chat);
        };
    })

    .controller('ApplicationCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('UserCtrl', function($scope) {
        $scope.settings = {
          enableFriends: true
        };
    });
