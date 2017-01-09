  var myApp = angular.module('myApp', []);

  myApp.controller('petController', ['$scope', '$http', function ($scope, $http){
  console.log('NG');
  $scope.pets=[];
  $scope.addPet= function() {
    console.log('in addPet ');
      var petObj= {
        Name: $scope.name,
        Species: $scope.species,
        Age: $scope.age,
        ImageUrl: $scope.imageUrl
      }; //end addPet obj
    $http.post('/addPet', assignment).then(function(response){
              console.log('response', response);
              $scope.getPet();
          });//end $http
      }; // end submitAssignment

      $scope.getPet = function() {
       $http.get('/getPet').then(function(response) {
           });
         };

         $scope.getPet();
       }]); //end controller
