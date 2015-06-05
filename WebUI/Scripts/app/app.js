
var dentalApp = angular.module('dentalApp', [
  'ngRoute','ui.bootstrap',
  'dentalControllers','dentalDirectives', 'myCalendarApp'
]);


dentalApp.config(['$routeProvider','$httpProvider',
function ($routeProvider,$httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    //$httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];

      $routeProvider.
        when('/main', {
            templateUrl: '/Templates/home/main.html'
        }).
        when('/404', {
            templateUrl: '/Templates/home/404.html'

        }).
        when('/phones/:phoneId', {
            templateUrl: '/Templates/AboutUs/AboutUs.html',
            controller: 'PhoneDetailCtrl'
        }).
          when('/schedule', {
              templateUrl: '/Templates/schedule/schedule.html'

          }).
          when('/about', {
              templateUrl: '/Templates/AboutUs/AboutUs.html'

          }).
          when('/RequestAppointment', {
              templateUrl: '/Templates/Appointment/RequestAppointment.html'

          }).
           when('/services', {
               templateUrl: '/Templates/services/default.html'

           }).
           when('/contactus', {
               templateUrl: '/Templates/contact/contactUs.html'

           }).
        otherwise({
            redirectTo: '/main'
        });
  }]);