(function() {
'use strict';

    angular
        .module('app')
        .controller('MainController', mainController);

    mainController.$inject = ['Sessions'];
    function mainController(Sessions) {
        var vm = this;

        vm.sessions = Sessions.getSessions();
        

        activate();

        ////////////////

        function activate() { 
            vm.Stuff = 'Hello World';
        }
    }
})();