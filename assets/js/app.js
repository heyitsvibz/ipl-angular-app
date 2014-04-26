var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/list.html',
        controller: 'ListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/detail.html',
        controller: 'DetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);