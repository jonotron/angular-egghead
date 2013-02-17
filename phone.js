var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {
  $scope.leaveVoicemail = function(number, message) {
    console.log('Number: ' + number + ' said: ', message);
  }
});

app.directive('phone', function() {
  return {
    restrict: "E", 
    scope: {
      number: '@',
      network: '=',
      makeCall: '&',
    },

    template: '<div class="panel">Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks"></select>' +
    '<input type="text" ng-model="value">' +
    '<div class="button" ng-click="makeCall({number: number, message: value})">Call</div></div>',

    link: function (scope) {
      scope.networks = ["Rogers", "Telus", "Bell"];
      scope.network = scope.networks[0];
    }
  }
})
