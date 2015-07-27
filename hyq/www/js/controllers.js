angular.module('hyq.controllers', [
    'hyq.services'
])

    .controller('FeedCtrl', ['$scope', '$timeout', function($scope, $timeout) {
        $scope.doRefresh = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 2000);
        };
    }])

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
