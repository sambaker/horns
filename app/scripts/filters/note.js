'use strict';

/**
 * @ngdoc filter
 * @name hornsApp.filter:Note
 * @function
 * @description
 * # Note
 * Filter in the hornsApp.
 */
angular.module('hornsApp')
  .filter('note', ['NoteNames', function (NoteNames) {
    var noteNames = NoteNames.hornNotes();
    return function (input) {
      return noteNames[input.index];
    };
  }]);
