
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


dentalControllers.controller('ContactUsCntrl', ['$scope','$http',
  function ($scope, $http) {

      $scope.Welcome = 'Hello Naveen welcome to the Angular World';

      var model = {};
      model.firstName = 'Abdul';
      model.lastName = 'Kalam';
      model.phone = '9909909000';
      model.email = 'Abdul@aaa.ccc';

      $scope.model = model;

      $scope.Click = click;

      function click() {

          $http.post("http://localhost:6172/api/values", $scope.model).success(function (data) {
              console.log(data);
          })
          .error(function (error) {
              console.log(data);
          })

      }

  }]);