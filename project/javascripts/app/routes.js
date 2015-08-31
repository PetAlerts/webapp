angular.module('PetAlerts')
.config(['$routeProvider', function($route){
  $route
    .when('/alerts', {
      templateUrl : '/templates/pages/alerts/index.html',
      controller  : 'AlertsIndexController'
    })
    .when('/',{
      redirectTo  : '/alerts'
    });
}]);