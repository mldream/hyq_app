/**
 * 好有钱Ionic＋AngularJs版本APP
 * @author baohao
 * @time 2015-07-21 21:43:00
 */
angular.module('hyq', [

    // Ionic Core
    'ionic',

    // Module config
    'hyq.feed',
    'hyq.application',
    'hyq.friend',
    'hyq.user',

    // Common Module
    'common.service',
    'common.filter',
    'common.directive',

    //
    'hyq.controllers'
])

.run(['$ionicPlatform', '$rootScope', '$state', function($ionicPlatform, $rootScope, $state) {

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

    $rootScope.hideTabs = false;
    $rootScope.$on('$ionicView.beforeEnter', function() {
        var stateName = $state.current.name;
        var hideTabs = true;
        if(stateName == 'hyq.user.index' || stateName == 'hyq.feed.index'
            || stateName == 'hyq.application.index' || stateName == 'hyq.friend.index') {
            hideTabs = false;
        }
        $rootScope.hideTabs = hideTabs;
    });

}])

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
    function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $state) {

    // 配置Android 和 IOS 系统的样式一致性
    $ionicConfigProvider.tabs.style('standard');                    // Tab的风格
    $ionicConfigProvider.tabs.position('bottom');                   // Tab的位置
    $ionicConfigProvider.navBar.alignTitle('center');               // 标题的位置
    $ionicConfigProvider.navBar.positionPrimaryButtons('left');     // 主要操作按钮的位置
    $ionicConfigProvider.navBar.positionSecondaryButtons('right');  // 次要操作按钮的位置
    $ionicConfigProvider.form.toggle('large');                      // Toggle按钮的样式
    $ionicConfigProvider.spinner.icon('ios');                       // Spinner图标的样式
    //$ionicConfigProvider.views.maxCache(0);

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
                templateUrl: 'templates/tab-feed.html'
            }
        }
    })

    // 应用 － application

    .state('hyq.application', {
        url: '/application',
        views: {
            'tab-application': {
                templateUrl: 'templates/tab-application.html',
                abstract: true
            }
        }
    })

    // 朋友 － friend

    .state('hyq.friend', {
        url: '/friend',
        views: {
            'tab-friend': {
                templateUrl: 'templates/tab-friend.html',
                abstract: true
            }
        }
    })

    // 我的 － user

    .state('hyq.user', {
        url: '/user',
        views: {
            'tab-user': {
                templateUrl: 'templates/tab-user.html',
                abstract: true
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/hyq/feed/index');

}]);
