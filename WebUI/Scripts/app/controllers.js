
var dentalControllers = angular.module('dentalControllers', []);

dentalControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('phones/phones.json').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
  }]);

dentalControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
  }]);

dentalControllers.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 3000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});