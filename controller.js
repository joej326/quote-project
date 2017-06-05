angular.module('userProfiles').controller('mainController', function($scope, mainService){

  var vm = $scope;


  vm.quotes = mainService.quotes;

  vm.trash_click = function(quote){

    mainService.trash_click(quote);


  vm.add_button_click = function() {
    mainService.add_button_click();
  }
});
