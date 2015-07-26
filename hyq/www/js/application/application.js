/**
 * Created by baohao on 15/7/26.
 */
angular.module('hyq.application', [])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // 好有钱APP Application模块

            // 首页 － application.index

            .state('hyq.application.index', {
                url: '/index',
                templateUrl: 'templates/application/application-index.html',
                controller: 'ApplicationCtrl'
            });

    }]);