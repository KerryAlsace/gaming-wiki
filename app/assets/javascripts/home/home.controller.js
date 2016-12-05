(function() {
  'use strict';

  function HomeController() {
    $scope.name = 'Kerry'
  }

  HomeController.$inject = ["$scope"]

  angular
    .module('app', ['ui.router', 'templates', 'Devise'])
    .controller('HomeController', HomeController)
    
}());