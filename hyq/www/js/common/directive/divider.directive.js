/**
 * Created by baohao on 15/7/23.
 */
angular.module('divider.directive', [
    'tool.service'
])

    // Auto List Divider

    .directive('autoListDivider', ['$timeout', 'toolService', function($timeout, toolService) {
        // 默认的Divide取值方法
        var defaultDivideFunction = function(item) {
            return toolService.toPinyin(item.slice(0, 1)).toString().toUpperCase();
        };
        // 默认的Divide模版
        var defaultDivideElementTpl = '<div class="item item-divider" id="${id}">${divider}</div>';

        var lastDivider = '';

        var linkFn = function(scope, element, attrs) {
            var key = attrs.autoListDividerValue;
            var customDivideFunction = attrs.autoListDividerFunction;
            var customDivideElementTpl = attrs.autoListDividerElementTpl;

            var doDivide = function() {
                var divideFunction = scope.$apply(customDivideFunction) || defaultDivideFunction;
                var divideElementTpl = customDivideElementTpl || defaultDivideElementTpl;
                var divider = divideFunction(key);

                if(divider != lastDivider) {
                    var elementHtml = divideElementTpl.replace('${divider}', divider).replace('${id}', Math.random()+'_divider');
                    var divideElement = angular.element(elementHtml);

                    var parentNodeElement = element[0].parentNode;
                    parentNodeElement.insertBefore(divideElement[0], element[0]);

                    lastDivider = divider;
                }
            };

            $timeout(doDivide, 0);
        };

        return {
            distract: 'A',
            link: linkFn
        };
    }])

    // Auto List Lookup

    .directive('autoListLookup', ['$timeout', function($timeout) {
        var defaultFunction = function() {

        };
        var defaultLookupIndexFunction = function() {
            var array = [];
            for(var i='A'; i <= 'Z'; i++) {
                array.push(i);
            }
            return array;
        };
        var defaultLookupElementTpl = '<div id="autoListLookup" style="">A</div>';

        var linkFn = function(scope, element, attrs) {
            var lookupIndex = defaultLookupIndexFunction();


        };

        return {
            distract: 'E',
            link: linkFn
        };
    }]);