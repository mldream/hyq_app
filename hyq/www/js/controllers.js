angular.module('hyq.controllers', [
    'hyq.services'
])

    .controller('FeedCtrl', function($scope) {})

    .controller('FriendCtrl', ['$scope', 'Friends', 'collectionService', 'toolService',
        function($scope, Friends, collectionService, toolService) {

            // 预处理
            // $scope.friends = dividerService.doDivide(Friends.all());
            var friends = Friends.all();

            var sortKeyFunction = function(item) {
                var key = toolService.toPinyin(item.name.slice(0, 1));
                return key.toString().toUpperCase();
            };
            $scope.friends = collectionService.sort(friends, sortKeyFunction);

            $scope.remove = function(friend) {
                Friends.remove(friend);
            };
    }])

    .controller('ApplicationCtrl', function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('UserCtrl', function($scope) {
        $scope.settings = {
          enableFriends: true
        };
    })

    .controller('UserSettingCtrl', function($scope) {

    });
