(function() {

  angular
  .module('shipyard.timeline')
  .controller('TimelineController', TimelineController);

  TimelineController.$inject = ['$location', '$window', 'Timeline', 'tablesort'];

  function TimelineController($location, $window, Timeline, tablesort) {
  }
})()
