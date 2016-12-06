(function() {
  'use strict';

  function StudioController($scope) {
    $scope.name = 'Kerry'
  }

  StudioController.$inject = ["$scope"]

  angular
    .module('app')
    .controller('StudioController', StudioController)
    
}());