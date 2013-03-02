var app = angular.module('app', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'ngview.tmpl.html',
      controller: 'AppCtrl'
    })
    .when('/pizza/:crust/:toppings', {
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams, path, search);
        return '/' + routeParams.crust; 
      }
    })
    .when('/deep', {
      template: 'Deep dish' 
    })
    .otherwise({
      redirectTo:'/'
    });
});

app.controller('AppCtrl', function($scope, $routeParams) {
  $scope.model = {
    message: "This is my app!!" 
  }
});
