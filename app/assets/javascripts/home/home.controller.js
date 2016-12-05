(function() {
  'use strict';

  function HomeController($scope) {
    $scope.name = 'Kerry'
  }

  HomeController.$inject = ["$scope"]

  angular
    .module('app', ['ui.router', 'templates', 'Devise'])
    .controller('HomeController', HomeController)
    
}());