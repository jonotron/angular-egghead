var app = angular.module('app', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'ngview.tmpl.html',
      controller: 'AppCtrl',
      resolve: {
        loadData: appCtrl.loadData,
        prepData: appCtrl.prepData
      }
    })
    .otherwise({
      redirectTo:'/'
    });
});

var appCtrl = app.controller('AppCtrl', function($scope, $route) {
  console.log($route);
  $scope.model = {
    message: "This is my app!!" 
  }
});

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function() {
    defer.resolve('loadData'); 
  }, 2000);
  return defer.promise;
} 

appCtrl.prepData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function() {
    defer.resolve('prepData'); 
  }, 2000);
  return defer.promise;
} 
