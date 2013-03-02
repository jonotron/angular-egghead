var app = angular.module("app", []);

app.directive('zippy', function() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@" 
    },
    templateUrl: 'zippy.tmpl.html',

    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible; 
      } 
    }
  }
})
