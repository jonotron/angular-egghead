var app = angular.module('behaviourApp', []);

app.directive("enter", function() {
  return function(scope, element) {
    element.bind('mouseenter', function() {
      console.log("I'm inside you!"); 
    }) 
  }
});

app.directive("leave", function() {
  return function(scope, element) {
    element.bind('mouseleave', function() {
      console.log("I'm leaving on a jetplan"); 
    }) 
  }
});
