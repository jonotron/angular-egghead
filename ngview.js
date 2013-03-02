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

app.controller('AppCtrl', function($scope, $q) {
  var defer = $q.defer();

  defer.promise.then(function(weapon) {
    alert('You can have my' + weapon);
    return 'bow';
  }).then(function(weapon) {
    alert('And my' + weapon); 
  });
  defer.resolve("sword");
  $scope.model = {
    message: "This is my app!!" 
  }
});
