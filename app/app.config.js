(function() {
    'use strict';

    angular
        .module('app-bootcamp')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/root');
            $stateProvider
                .state(
                    {
                        name:'root',
                        url:'/root',
                        template:'<h2>Início</h2>'
                    }
                );
        });
})();