/**
 * Created by baohao on 15/7/26.
 */

UserControllerModule

    // User - Transaction Controller

    .controller('UserTransactionCtrl', ['$scope', '$timeout', 'UserTransactionService', function($scope, $timeout, UserTransactionService) {
        $scope.transactions = $.extend([], UserTransactionService.all());

        $scope.getImageUrl = function(customKey) {
            var key = customKey || '4';
            return 'https://uimg-oklink-com.alikunlun.com/' + key;
        };

        $scope.getDivider = function(item) {
            var date = new Date(Number(item));

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            if(month < 10) {
                month = '0' + month;
            }

            var result = year + month;
            return result;
        };

        $scope.doRefresh = function() {
            $timeout(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            }, 2000);
        };

        $scope.canLoadMore = true;
        var page = 3;
        $scope.loadMore = function() {
            $timeout(function() {
                UserTransactionService.all().forEach(function(item) {
                    var copyItem = $.extend({}, item);
                    copyItem.id += 'copy' + Math.random();
                    $scope.transactions.push(copyItem);
                });
                page --;
                $scope.$broadcast('scroll.infiniteScrollComplete');
                if(page == 0) {
                    $scope.canLoadMore = false;
                }
            }, 1500);
        };
    }])

    // User - Transaction Detail Controller

    .controller('UserTransactionDetailCtrl', ['$scope', function($scope) {

    }]);

UserServiceModule

    // User - Transaction Service

    .service('UserTransactionService', function() {

        var transactions = [
            {
                "amount": 0.1,
                "created_time": 1429515599000,
                "currency": 2,
                "id": 4169596,
                "io": 2,
                "settingFlag": 0,
                "status": 6,
                "type": 201,
                "user_id": 204829,
                "user_name": "leox",
                "user_picture": "bc3dd0776d1b427bb371ad2f15c391c4",
                "user_real_name_authed": false
            },
            {
                "amount": 0.1,
                "created_time": 1430808354000,
                "currency": 2,
                "id": 4854701,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 101,
                "user_name": "OKLinkå°å–éƒ¨",
                "user_picture": "4",
                "user_real_name_authed": true
            },
            {
                "amount": 0.1,
                "created_time": 1430811173000,
                "currency": 2,
                "id": 4854736,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 230376,
                "user_name": "Globebill",
                "user_picture": "11",
                "user_real_name_authed": false
            },
            {
                "amount": 0.1,
                "created_time": 1430812118000,
                "currency": 2,
                "id": 4854775,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 101,
                "user_name": "OKLinkå°å–éƒ¨",
                "user_picture": "11",
                "user_real_name_authed": true
            },
            {
                "amount": 1,
                "created_time": 1431178059000,
                "currency": 2,
                "id": 4855689,
                "io": 1,
                "settingFlag": 0,
                "status": 200,
                "type": 200,
                "user_id": 806977,
                "user_name": "18810987820",
                "user_picture": "4",
                "user_real_name_authed": false
            },
            {
                "amount": 10,
                "created_time": 1432275197000,
                "currency": 2,
                "id": 5364389,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 201063,
                "user_name": "JackCLiu",
                "user_picture": "11",
                "user_real_name_authed": false
            },
            {
                "amount": 50,
                "created_time": 1432282357000,
                "currency": 2,
                "id": 5364461,
                "io": 1,
                "settingFlag": 0,
                "status": 0,
                "type": 304,
                "user_id": 201063,
                "user_name": "JackCLiu",
                "user_picture": "4",
                "user_real_name_authed": false
            },
            {
                "amount": 30,
                "created_time": 1432288959000,
                "currency": 2,
                "id": 5364518,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 201803,
                "user_name": "OKLinkè™šæ‹Ÿç‰©å“æœåŠ¡å¹³å°",
                "user_picture": "11",
                "user_real_name_authed": false
            },
            {
                "amount": 0.1,
                "created_time": 1432785059000,
                "currency": 2,
                "id": 5366096,
                "io": 2,
                "settingFlag": 0,
                "status": 0,
                "type": 300,
                "user_id": 204829,
                "user_name": "leox",
                "user_picture": "bc3dd0776d1b427bb371ad2f15c391c4",
                "user_real_name_authed": false
            },
            {
                "amount": 1,
                "created_time": 1435922431000,
                "currency": 2,
                "id": 5799090,
                "io": 2,
                "settingFlag": 0,
                "status": 201,
                "type": 201,
                "user_id": 204829,
                "user_name": "leox",
                "user_picture": "bc3dd0776d1b427bb371ad2f15c391c4",
                "user_real_name_authed": false
            },
            {
                "amount": 0.1,
                "created_time": 1435961843000,
                "currency": 2,
                "id": 5799142,
                "io": 1,
                "settingFlag": 0,
                "status": 0,
                "type": 304,
                "user_id": 204829,
                "user_name": "4",
                "user_picture": "bc3dd0776d1b427bb371ad2f15c391c4",
                "user_real_name_authed": false
            }
        ];

        var publicGetAll = function() {
            return transactions;
        };

        return {
            all: publicGetAll
        };
    })

    // User - Transaction Detail Service

    .service('UserTransactionDetailService', function() {

    });