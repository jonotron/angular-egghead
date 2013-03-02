var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', function(a) {
  console.log(a);
}] );

app.directive('myDirective', function() {
  return {
    link: function (scope, element, attrs) {
      console.log(scope); 
    } 
  }
});
