(function(){
    'use strict';

    angular
        .module('shipyard.schedule')
        .factory('Schedule', function($resource) {
            return $resource('http://localhost:8000/api/v1/jobs', {}, {
                'purge': { isArray: true, method: 'GET' },
                query: { isArray: true }
            });
        });

})()
