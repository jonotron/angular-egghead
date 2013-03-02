var app = angular.module('app', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'ngview.tmpl.html',
      controller: 'AppCtrl'
    }) 
    .when('/pizza', {
      template: "yum" 
    })
    .otherwise({
      template: "this doesn't exist"
    })
});

app.controller('AppCtrl', function($scope) {
  $scope.model = {
    message: "This is my app!!!" 
  }
});
