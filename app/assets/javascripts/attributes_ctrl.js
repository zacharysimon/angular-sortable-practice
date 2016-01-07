/* global angular */


(function() {

  "use strict";
  angular.module("app").controller("SimpleDemoController", function($scope) {

    $scope.models = {
      selected: null,
      lists: {"A": [], "B": []}
    };
    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      
      $scope.models.lists.B.push({label: "Item B" + i});
    }

    $scope.models.lists.A = [{
      label: "Price"
      },{label: "Cost"
      },{label: "Sq Ft"
    }];

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    window.$scope = $scope;
  });
})();