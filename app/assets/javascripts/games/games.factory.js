(function() {
  'use strict';

  function GameFactory($http) {

    return {
      getGames: getGames,
      createGame: createGame
    }

    function getGames() {
      return $http.get('/games')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function createGame(content) {
      var req = {
        method: 'POST',
        url: '/games',
        headers: {
          'Content-Type': undefined
        },
        data: { content }
      }

      return $http(req)
    }

    function handleResponse(response) {
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }

  }

  angular
    .module('app')
    .factory('GameFactory', GameFactory)
    
}());