(function() {
    'use strict';

    angular
        .module('module')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state(
                    {
                        name:'root',
                        url:'/',
                        template:'<h2>Início</h2>'
                    }
                );
        });
})();