var app = angular.module('behaviourApp', []);

var controllers = {
  AppCtrl: function($scope) {
    this.sayHi = function() {
      console.log('Hi'); 
    } 

    return $scope.AppCtrl = this;
  }
}

app.controller(controllers);
