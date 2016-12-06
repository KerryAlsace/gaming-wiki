(function() {
  'use strict';

  function GameFactory($http) {

    return {
      getGames: getGames
    }

    function getGames() {
      return $http.get('/games')
                  .then(handleResponse)
                  .catch(handleError)
    }

    function handleResponse(response) {
      console.log(response.data)
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