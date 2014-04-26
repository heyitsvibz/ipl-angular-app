var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('ListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('jsons/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);



 
phonecatControllers.controller('DetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('jsons/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);