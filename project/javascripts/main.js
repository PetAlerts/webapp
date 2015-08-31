angular.module('PetAlerts',[
  'ngRoute',
  'ngCookies',
  'ngMaterial',
  'ngSanitize',
  'ngMdIcons'
])
.controller('AppCtrl',function($scope, $mdUtil, $mdSidenav, $location, $mdToast){
  $scope.toggleLeft = buildToggler('left');
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
            });
        },300);
    return debounceFn;
  };

  $scope.closeNavigation = function(nav){
    $mdSidenav(nav).close()
      .then(function () {
      });
  };

  $scope.navigateTo = function(url){
    $location.path(url);
    $scope.closeNavigation('left');
  };
});
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
angular.module('PetAlerts')
.controller('AlertsIndexController',
  [
    '$scope',
    function($scope) {
      $scope.title = 'Lost Pets';
    }
  ]
);
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