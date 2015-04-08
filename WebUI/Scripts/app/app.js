
var dentalApp = angular.module('dentalApp', [
  'ngRoute','ui.bootstrap',
  'dentalControllers'
]);

dentalApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/phones', {
            templateUrl: '/Templates/Contact/ContactUs.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: '/Templates/AboutUs/AboutUs.html',
            controller: 'PhoneDetailCtrl'
        }).
          when('/About', {
              templateUrl: '/Templates/AboutUs/AboutUs.html'
             
          }).
        otherwise({
            redirectTo: '/phones'
        });
  }]);