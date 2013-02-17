var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
  return {message: "I'm data from a service"};
});
myApp.filter('reverse', function() {
  return function(text) {
    return text.split("").reverse().join(""); 
  }
});

function FirstController($scope, Data) {
  $scope.data = Data;
}

function SecondController($scope, Data) {
  $scope.data = Data;
}
