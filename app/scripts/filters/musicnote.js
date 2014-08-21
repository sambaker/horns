'use strict';

/**
 * @ngdoc filter
 * @name hornsApp.filter:musicNote
 * @function
 * @description
 * # musicNote
 * Filter in the hornsApp.
 */
angular.module('hornsApp')
  .filter('musicNote', function () {
    return function (input) {
      var s = input.replace('b', '♭');
      return s.replace('#', '♯');
    };
  });
