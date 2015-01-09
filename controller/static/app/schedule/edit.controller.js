(function() {

    angular
        .module('shipyard.schedule')
        .controller('EditController', EditController);

    EditController.$inject = ['$scope', '$location', '$window', 'Schedule', 'tablesort'];

    function EditController($scope, $location, $window, Schedule, tablesort) {
        var vm = this;
        vm.tablesort = tablesort;

        $scope.saveSchedule = function() {

          var body = {
            image: vm.element.image,
            schedule: vm.element.schedule,
            name: vm.element.name,
            memory: vm.element.memory,
            command : vm.element.command,
            cpu : vm.element.cpu
          }
          console.log("Saving schedule: " + JSON.stringify(body));
          $.post("http://localhost:8000/api/v1/jobs",JSON.stringify(body))
            .done(function() {
              console.log("done");
            })
            .fail(function(xhr, textStatus, errorThrown) {
              console.log("fail: " + xhr.responseText);
            });
        };

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
