/**
 * 好有钱Ionic＋AngularJs版本APP
 * @author baohao
 * @time 2015-07-21 21:43:00
 */
angular.module('hyq', [

    // Ionic Core
    'ionic',

    //
    'hyq.controllers',
    'hyq.services'
])

.run(['$ionicPlatform', function($ionicPlatform) {

    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }
    });

}])

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // 配置Android 和 IOS 系统的样式一致性
    $ionicConfigProvider.tabs.style('standard');                    // Tab的风格
    $ionicConfigProvider.tabs.position('bottom');                   // Tab的位置
    $ionicConfigProvider.navBar.alignTitle('center');               // 标题的位置
    $ionicConfigProvider.navBar.positionPrimaryButtons('left');     // 主要操作按钮的位置
    $ionicConfigProvider.navBar.positionSecondaryButtons('right');  // 次要操作按钮的位置

    $stateProvider

    // 好有钱APP超模块 hyq

    .state('hyq', {
        url: '/hyq',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // 首页 － feed

    .state('hyq.feed', {
        url: '/feed',
        views: {
            'tab-feed': {
                templateUrl: 'templates/tab-feed.html',
                controller: 'FeedCtrl'
            }
        }
    })

    // 应用 － application

    .state('hyq.application', {
        url: '/application',
        views: {
            'tab-application': {
                templateUrl: 'templates/tab-application.html',
                controller: 'ApplicationCtrl'
            }
        }
    })

    // 朋友 － friend

    .state('hyq.friend', {
        url: '/friend',
        views: {
            'tab-friend': {
                templateUrl: 'templates/tab-friend.html',
                controller: 'FriendCtrl'
            }
        }
    })

    // 我的 － user

    .state('hyq.user', {
        url: '/user',
        views: {
            'tab-user': {
                templateUrl: 'templates/tab-user.html',
                controller: 'UserCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/hyq/feed');

}]);
