/**
 * Created by baohao on 15/7/26.
 */
angular.module('hyq.feed', [])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // 好有钱APP Feed模块

            // 首页 － feed.index

            .state('hyq.feed.index', {
                url: '/index',
                templateUrl: 'templates/feed/feed-index.html',
                controller: 'FeedCtrl'
            });

    }]);