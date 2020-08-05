(function() {
    'use strict';
    angular
        .module('app-bootcamp')
        .component('apresentacao', {
            templateUrl: 'modules/apresentacao/apresentacao.html',
            controller: ApresentacaoController,
            controllerAs: '$ctrl',
        });

    ApresentacaoController.$inject = ['$rootScope','$http'];
    function ApresentacaoController($rootScope, $http) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = onInit;
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };

        ////////////////

        function onInit() {
            console.log('init');
         };
    }
})();