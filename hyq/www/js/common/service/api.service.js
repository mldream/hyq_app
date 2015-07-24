/**
 * Created by baohao on 15/7/23.
 */
angular.module('api.service', [])

.constant('apiConstant', function() {
    // The same api controller
    var api_url = '/v1/api/mao/index.do';

    // The different api key
    var api_key = {

        // friend module


        // feed module


        // user module


        // transaction module


        // friendMoney module


        // xjBao module


        // hongbao module

    };

    // Return public data source
    return {
        url: api_url,
        key: api_key
    };
});