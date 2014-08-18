'use strict';

/**
 * @ngdoc function
 * @name hornsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hornsApp
 */
angular.module('hornsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
