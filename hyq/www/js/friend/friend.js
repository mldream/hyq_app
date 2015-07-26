/**
 * Created by baohao on 15/7/26.
 */
angular.module('hyq.friend', [])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // 好有钱APP Friend模块

            // 首页 － friend.index

            .state('hyq.friend.index', {
                url: '/index',
                templateUrl: 'templates/friend/friend-index.html',
                controller: 'FriendCtrl'
            });

    }]);