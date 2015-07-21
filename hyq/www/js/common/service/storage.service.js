/**
 * Created by baohao on 15/7/22.
 */
angular.module('storage.service', [

])

.factory('StorageService', function() {
    var storage = window.sessionStorage;

    return {
        add: function(key, value) {
            if(key == undefined || value == undefined) {
                return false;
            }
            storage.key = value;
            return true;
        },
        remove: function(key) {
            if(key == undefined) {
                return undefined;
            }
            var value = storage.getItem(key);
            storage.removeItem(key);
            return value;
        },
        get: function(key) {
            if(key == undefined) {
                return undefined;
            }
            return storage.getItem(key);
        },
        length: function() {
            return storage.length;
        }
    };
});