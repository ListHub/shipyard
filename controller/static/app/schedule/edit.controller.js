(function() {

    angular
        .module('shipyard.schedule')
        .controller('EditController', EditController);

    EditController.$inject = ['$location', '$window', 'Schedule', 'tablesort'];

    function EditController($location, $window, Schedule, tablesort) {
        var vm = this;
        vm.tablesort = tablesort;

        vm.initSort = function() {
            console.log("oooh")
            vm.tablesort.sortBy('time');
            vm.tablesort.setReverseSort(true);
            console.log(vm)
        }

        vm.showPurgeScheduleDialog = function() {
            $('.basic.modal.purgeSchedule')
                .modal('show');
        };


        Schedule.query(function(data){
            console.log("blah")
            vm.element = data[0];
            console.log(vm.element.name)
        });
    }
})()
