(function() {
    'use strict';

    angular
        .module('shipyard.schedule')
        .config(scheduleRoute);

    scheduleRoute.$inject = ['$routeProvider'];

    function scheduleRoute($routeProvider) {
        $routeProvider.when('/schedule', {
            templateUrl: 'app/schedule/schedule.html',
            controller: 'ScheduleController',
            controllerAs: 'vm'
        })
        $routeProvider.when('/schedule/edit/:id', {
            templateUrl: 'app/schedule/edit.html',
            controller: 'EditController',
            controllerAs: 'vm'
        });
    };
})()

