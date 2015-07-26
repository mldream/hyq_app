
angular.module('divider.service', [
    'tool.service'
])

    .factory('dividerService', ['toolService', function(toolService) {
        var doDivide = function(data, divideFn, sortFn) {
            if(!data || !Array.isArray(data) || data.length == 0) {
                return [];
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
                var pinyin = toolService.toPinyin(str.slice(0, 1)).toString();
                if(!isTypeString(pinyin)) {
                    return defaultDivideCharacter;
                }
                var firstCharacter = pinyin.slice(0, 1);
                if(!isTypeString(firstCharacter)) {
                    return defaultDivideCharacter;
                }
                return firstCharacter.toUpperCase();
            };
            var divideFunction = divideFn || defaultDivideFunction;

            // 默认的排序规则
            var defaultSortFunction = function(item) {
                return item.name;
            };
            var sortFunction = sortFn || defaultSortFunction;

            var currentDivider = 'A'.charCodeAt(0) - 1;
            var specialData = [];
            var resultData = [];
            console.log(data);
            data

                // 排序
                .sort(function(a, b) {
                    var divideA = divideFunction(sortFunction(a));
                    var divideB = divideFunction(sortFunction(b));
                    return (divideA < divideB) ? -1 : (divideA > divideB) ? 1 : 0;
                })

                // 遍历插入divider
                .forEach(function(item) {
                    var divider = divideFunction(sortFunction(item));

                    if(divider < 'A' || divider > 'Z') {
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

            // 插入特殊数据集
            if(specialData && specialData.length > 0) {
                resultData.push({
                    letter: defaultDivideCharacter,
                    isLetter: true
                });
                specialData.forEach(function(item) {
                    resultData.push(item);
                });
            }

            return resultData;
        };

        return {
            doDivide: doDivide
        };
    }]);