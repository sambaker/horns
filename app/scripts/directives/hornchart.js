'use strict';

/**
 * @ngdoc directive
 * @name hornsApp.directive:hornChart
 * @description
 * # hornChart
 */
angular.module('hornsApp')
  .directive('hornChart', function () {
    return {
      templateUrl: 'views/hornchart.html',
      restrict: 'E',
      scope: {
      	hornDef: '=',
      	selections: '='
      },
      link: function postLink() {//scope, element, attrs) {
        //element.text('this is the hornChart directive');
      }
    };
  });
