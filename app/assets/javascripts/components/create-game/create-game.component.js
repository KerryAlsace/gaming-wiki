(function() {

    'use strict';

    var createGame = {
        transclude: true,
        controller: CreateGameComponentController,
        templateUrl: 'components/create-game/create-game.html'
    }

    function CreateGameComponentController(GameFactory, $state) {
        var ctrl = this

        ctrl.createGame = createGame

        function createGame() {
            return GameFactory.createGame({
                name: ctrl.name,
                content: ctrl.content,
                studio: ctrl.studio,
                genre: ctrl.genre
            })
                               .then(function() {
                                   $state.go('home/games')
                               })
        }

    }

    angular
        .module('app')
        .component('createGame', createGame)

}());