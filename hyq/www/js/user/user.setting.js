/**
 * Created by baohao on 15/7/27.
 */
angular.module('hyq.user.setting', [
    'hyq.user.setting.controller'
])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // 好有钱APP User.Setting模块

            .state('hyq.user.setting.index', {
                url: '/index',
                templateUrl: 'templates/user/setting/setting-index.html',
                controller: 'UserSettingCtrl'
            })

            // 修改登录密码 - user.setting.update-login-password

            .state('hyq.user.setting.update-login-password', {
                url: '/update-login-password',
                templateUrl: 'templates/user/setting/update-login-password.html',
                controller: 'UpdateLoginPasswordCtrl'
            })

            // 修改支付密码 - user.setting.update-trade-password

            .state('hyq.user.setting.update-trade-password', {
                url: '/update-trade-password',
                templateUrl: 'templates/user/setting/update-trade-password.html',
                controller: 'UpdateTradePasswordCtrl'
            })

            // 自动还款设置 － user.setting.autoRepay

            .state('hyq.user.setting.auto-repay', {
                url: '/auto-repay',
                templateUrl: 'templates/user/setting/auto-repay.html',
                controller: 'AutoRepayCtrl'
            })

            // 小额免密设置 － user.setting.free-password

            .state('hyq.user.setting.free-password', {
                url: '/free-password',
                templateUrl: 'templates/user/setting/free-password.html',
                controller: 'FreePasswordCtrl'
            });

    }]);

// User.Setting Controller Module

var UserSettingControllerModule = angular.module('hyq.user.setting.controller', [
    'hyq.user.setting.service'
]);

// User.Setting Service Module

var UserSettingServiceModule = angular.module('hyq.user.setting.service', []);