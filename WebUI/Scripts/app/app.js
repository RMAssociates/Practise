
var dentalApp = angular.module('dentalApp', [
  'ngRoute','ui.bootstrap',
  'dentalControllers', 'myCalendarApp'
]);

dentalApp.config(['$routeProvider','$httpProvider',
function ($routeProvider,$httpProvider) {

      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.withCredentials = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      //$httpProvider.defaults.headers.common["Accept"] = "application/json";
      //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";


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
        otherwise({
            redirectTo: '/404'
        });
  }]);