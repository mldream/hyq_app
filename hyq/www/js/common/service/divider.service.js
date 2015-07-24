
angular.module('divider.service', [
    'tool.service'
])

    .factory('dividerService', ['toolService', function(toolService) {
        var init = function(data, divideFn, sortFn) {
            if(!data || typeof data != 'array' || data.length == 0) {
                return;
            }

            // string类型的非空字符串
            var isTypeString = function(str) {
                if(!str || typeof str != 'string' || str.trim().length == 0) {
                    return false;
                }
                return true;
            };

            // 默认的索引字符
            var defaultDivideCharacter = '#';
            // 默认的索引规则
            var defaultDivideFunction = function(str) {
                if(!isTypeString(str)) {
                    return defaultDivideCharacter;
                }
                var pinyin = toolService.toPinyin(str.slice(0, 1));
                if(!isTypeString(pinyin)) {
                    return defaultDivideCharacter;
                }
                var firstCharacter = pinyin.slice(0, 1);
                if(!isTypeString(firstCharacter)) {
                    return defaultDivideCharacter;
                }
                return firstCharacter;
            };
            var divideFunction = divideFn || defaultDivideFunction;

            // 默认的排序规则
            var defaultSortFunction = function(item) {
                return item.title;
            };
            var sortFunction = sortFn || defaultSortFunction;

            var currentDivider = 'A'.charCodeAt(0) - 1;
            var specialData = [];
            var resultData = [];
            data

                // 排序
                .sort(function(a, b) {
                    var divideA = divideFunction(sortFunction(a));
                    var divideB = divideFunction(sortFunction(b));
                    return (divideA < divideB) ? -1 : (divideA > divideB) ? 1 : 0;
                })

                // 遍历插入divider
                .forEach(function(item) {
                    var divider = divideFunction(sortFunction(item)).charCodeAt(0);

                    if(divider < 65 || divider > 90) {
                        specialData.push(item);
                    } else {
                        if(divider != currentDivider) {
                            resultData.push({
                                letter: divider,
                                isLetter: true
                            });
                            currentDivider = divider;
                        }
                        resultData.push(item);
                    }
                });

        };

        return {
            init: init
        };
    }]);