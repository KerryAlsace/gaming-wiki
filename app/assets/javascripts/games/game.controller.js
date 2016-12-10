(function() {
  'use strict';

  function GameController(GameFactory) {
    var ctrl = this;

    ctrl.games = '';

    ctrl.actions = [
      'Create a Game Page',
      'See Highest Rated Game',
      'Search for a Game',
      'Filter Games'
    ]

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