/**
 * Created by baohao on 15/7/25.
 */
angular.module('hyq.user', [
    'hyq.user.controller'
])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // 好有钱APP User模块

            .state('hyq.user.index', {
                url: '/index',
                templateUrl: 'templates/user/user-index.html',
                controller: 'UserCtrl'
            })

            // 交易记录 - user.transactions

            .state('hyq.user.transaction', {
                url: '/transactions',
                templateUrl: 'templates/user/user-transaction.html',
                controller: 'UserTransactionCtrl'
            })

            // 设置 － user.setting

            .state('hyq.user.setting', {
                url: '/setting',
                templateUrl: 'templates/user/user-setting.html',
                controller: 'UserSettingCtrl'
            });

    }]);

// User Controller Module

var UserControllerModule = angular.module('hyq.user.controller', [
    'hyq.user.service'
]);

// User Service Module

var UserServiceModule = angular.module('hyq.user.service', []);