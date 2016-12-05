(function() {
  'use strict';

  function GameController($scope) {
    $scope.name = 'Kerry'
  }

  GameController.$inject = ["$scope"]

  angular
    .module('app', ['ui.router', 'templates', 'Devise'])
    .controller('GameController', GameController)
    
}());