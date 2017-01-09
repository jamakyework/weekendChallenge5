  var myApp = angular.module('myApp', []);

  myApp.controller('PetController', ['$scope', '$http', function ($scope, $http){
  console.log('NG');
  $scope.pets=[];

//begin addPet
  $scope.addPet= function() {
    console.log('in addPet ');
      var newPet= {
        name: $scope.name,
        species: $scope.species,
        age: $scope.age,
        imageUrl: $scope.imageUrl
      }; //end addPet obj
      console.log("newPet", newPet);
      //begin post
    $http.post('/addPet', newPet).then(function(response){
              console.log('response', response);
              $scope.getPet();
          });//end post
      }; // end addPet

      //begin getPet
      $scope.getPet = function() {
        console.log('in getPet');
       $http.get('/getPet').then(function(response) {
         console.log('response', response);
         $scope.pets= response.data;
         console.log('$scope.pets:', $scope.pets);
           });
         }; //end getPet

         $scope.getPet();

       }]); //end controller
