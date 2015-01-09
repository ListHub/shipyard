(function() {

    angular
        .module('shipyard.schedule')
        .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject = ['$location', '$window', 'Schedule', 'tablesort'];

    function ScheduleController($location, $window, Schedule, tablesort) {
        var vm = this;
        vm.tablesort = tablesort;

        vm.initSort = function() {
            vm.tablesort.sortBy('time');
            vm.tablesort.setReverseSort(true);
        }

        vm.showPurgeScheduleDialog = function() {
            $('.basic.modal.purgeSchedule')
                .modal('show');
        };

        vm.purgeSchedule = function() {
            Schedule.purge().$promise.then(function(c) {
                // we must remove the modal or it will come back
                // the next time the modal is shown
                $('.basic.modal').remove();
                $location.path('/schedule');
                $window.location.reload();
            }, function(err) {
                flash.error = 'error purging schedule: ' + err.data;
            });
        };

        Schedule.query(function(data){
            vm.schedule = data;
        });
    }
})()
