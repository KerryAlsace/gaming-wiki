(function() {
  'use strict';

  function GameController(GameFactory) {
    var ctrl = this;

    ctrl.games = '';

    GameFactory
      .getGames()
      .then(function(data) {
        ctrl.games = data;
      });
  }

  angular
    .module('app')
    .controller('GameController', GameController)
    
}());