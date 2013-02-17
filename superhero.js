var app = angular.module('superhero', []);

app.directive('superman', function() {
  return {
    restrict: 'C',
    link: function() {
      alert("I'm working on it"); 
    }
  }
});
