angular.module('PetAlerts')
.directive('alertList', function(Alert){
  return {
    restrict : 'E',
    scope: {
    },
    templateUrl : 'templates/directives/alert-list.html',
    link : function(scope, element, attrs){
      scope.alerts = [];

      scope.get = function(){
        var params = {
        };
        Alert.get(params)
          .then(function(response){
            scope.alerts = response.data;
          });
      };

      scope.get();
    }
  };
});