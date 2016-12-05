(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as home'
        })
        .state('home.games', {
          url: '/games',
          templateUrl: 'games/games.html',
          controller: 'GameController as games'
        })

      $urlRouterProvider.otherwise('/')
    })
    
}());