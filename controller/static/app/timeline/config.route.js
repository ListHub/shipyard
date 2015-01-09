(function () {
    'use strict';

    angular
        .module('shipyard.timeline')
        .config(timelineRoute);

    timelineRoute.$inject = ['$routeProvider'];

    function timelineRoute($routeProvider) {
        $routeProvider.when('/timeline', {
            templateUrl: 'app/timeline/timeline.html',
            controller: 'TimelineController',
            controllerAs: 'vm'
        })
    };
})()
