
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
            image: 'http://localhost:6759/Images/examining.jpg',
            text: 'Doctor Examining a Patient'
        
        });
        slides.push({
            image: 'http://localhost:6759/Images/Whitening.jpg',
            text: 'Doctor Examining a Patient'

        });
        slides.push({
            image: 'http://localhost:6759/Images/family.jpg',
            text: 'Doctor Examining a Patient'

        });
    };

    //for (var i = 0; i < 4; i++) {
    //    $scope.addSlide();
    //}

    $scope.addSlide();
});


dentalControllers.controller('ContactUsCntrl', ['$scope', '$http',
  function ($scope, $http) {

      

      var model = {};
      //model.firstName = 'Abdul';
      //model.lastName = 'Kalam';
      //model.phone = '9909909000';
      //model.email = 'Abdul@aaa.ccc';

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

dentalControllers.controller('AppointmentController', ['$scope', '$http',
  function ($scope, $http) {
      $scope.TempModelTest = "Test model";
      $scope.model = {
          firstName: "AbdulKalam",
          contactOptions: [
              { name: 'Phone', value: 'Phone' },
              { name: 'Email', value: 'Email' }
          ],
          patientTypes: [
              { name: 'Yes', value: 'Yes' },
              { name: 'Yes', value: 'Yes' }
          ],
          visits: [
              { name: 'in 1 - 3 months', value: '3M' },
              { name: 'in 3 - 6 months', value: '6M' },
              { name: 'in 6 - 12 months', value: '12M' },
              { name: 'in 12 months+', value: '12MPlus' }
          ],
          visitTimings: [
              { name: 'Morning', value: 'Morning' },
              { name: 'Mid-day', value: 'MidDay' },
              { name: 'Afternoon', value: 'Afternoon' }
          ],
          visitDays: [
              { name: 'Monday', value: 'Monday' },
              { name: 'Tuesday', value: 'Tuesday' },
              { name: 'Wednesday', value: 'Wednesday' },
              { name: 'Thursday', value: 'Thursday' }
          ]
      };
      $scope.model.sContactOption = $scope.model.contactOptions[0];
      $scope.model.sPatientType = $scope.model.patientTypes[0];
      $scope.model.sVisit = $scope.model.visits[0];
      $scope.model.sVisitTime = $scope.model.visitTimings[0];
      
  }]);
