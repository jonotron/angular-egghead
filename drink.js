var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
  $scope.ctrlFlavour = "blackberry";

});

app.directive("drink", function() {
  return {
    scope: {
      flavour: "=", 
    },

    template: '<div>{{flavour}}</div>'

  }
});
