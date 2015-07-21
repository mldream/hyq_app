angular.module('hyq.controllers', [])

    .config(['$ionicConfigProvider', function($ionicConfigProvider) {

      $ionicConfigProvider.tabs.style('standard');                    // Tab风格
      $ionicConfigProvider.tabs.position('bottom');                   // Tab位置
      $ionicConfigProvider.navBar.alignTitle('center');               // 标题位置
      $ionicConfigProvider.navBar.positionPrimaryButtons('left');     // 主要操作按钮位置
      $ionicConfigProvider.navBar.positionSecondaryButtons('right');  // 次要操作按钮位置

    }])

    .controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
