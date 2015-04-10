
var dentalApp = angular.module('dentalApp', [
  'ngRoute','ui.bootstrap',
  'dentalControllers'
]);

dentalApp.config(['$routeProvider',
  function ($routeProvider) {
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
          when('/About', {
              templateUrl: '/Templates/AboutUs/AboutUs.html'
             
          }).
        otherwise({
            redirectTo: '/404'
        });
  }]);