/* global angular */


(function() {
  "use strict";

  angular.module("app").controller("listingCtrl", function($scope) {


    $scope.attributes = [
      "address",
      "price",
      "sqft",
      "cost_per_sqft",
      "monthly_pmt",
      "walk_score",
      "amenities_score",
      "building_score"
    ];

    window.$scope = $scope;
  });
})();