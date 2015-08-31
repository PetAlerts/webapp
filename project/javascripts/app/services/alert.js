angular.module('PetAlerts')
.factory('Alert', function AlertFactory($http){
  return {
    get: function(parameters){
      var params = {};
      if (typeof parameters === 'object') {
        params = parameters;
      }
      return $http({
        method : 'GET',
        url    : 'http://www.petalerts.org/api/alert/',
        params : parameters
      });
    }
  };
});