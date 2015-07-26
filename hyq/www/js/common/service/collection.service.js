/**
 * Created by baohao on 15/7/25.
 */
angular.module('collection.service', [])

    .factory('collectionService', function() {
        // 排序(数组)
        var publicSortFunction;
        // 反转(字符串｜数组)
        var publicReverseFunction;

        publicSortFunction = function(customArray, customSortKeyFunction, customSortFunction) {
            var defaultArray = [];
            var defaultSortKeyFunction = function(item) {
                return item;
            };
            var defaultSortFunction = function(item1, item2) {
                return item1 > item2 ? 1 : -1;
            };

            var array = customArray || defaultArray;
            var sortKeyFunction = customSortKeyFunction || defaultSortKeyFunction;
            var sortFunction = customSortFunction || defaultSortFunction;

            var sorted = function(item1, item2) {
                var sortKey1 = sortKeyFunction(item1);
                var sortKey2 = sortKeyFunction(item2);

                return sortFunction(sortKey1, sortKey2);
            };

            return array.sort(sorted);
        };

        publicReverseFunction = function(customData) {
            var defaultData = [];

            var data = customData || defaultData;
            if(typeof data == 'string') {
                return String.prototype.split.call(data).reverse().join('');
            } else if(Array.isArray(data)) {
                return data.reverse();
            }
            return data;
        };

        return {
            sort: publicSortFunction,
            reverse: publicReverseFunction
        };
    });