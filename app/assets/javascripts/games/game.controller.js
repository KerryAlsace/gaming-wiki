(function() {
  'use strict';

  function GameController($scope) {
    $scope.name = 'Kerry'
  }

  GameController.$inject = ["$scope"]

  angular
    .module('app')
    .controller('GameController', GameController)
    
}());