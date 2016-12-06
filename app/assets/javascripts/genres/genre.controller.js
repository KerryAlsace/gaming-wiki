(function() {
  'use strict';

  function GenreController($scope) {
    $scope.name = 'Kerry'
  }

  GenreController.$inject = ["$scope"]

  angular
    .module('app')
    .controller('GenreController', GenreController)
    
}());