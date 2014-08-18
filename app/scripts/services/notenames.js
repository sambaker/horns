'use strict';

/**
 * @ngdoc service
 * @name hornsApp.NoteNames
 * @description
 * # NoteNames
 * Service in the hornsApp.
 */
angular.module('hornsApp')
  .service('NoteNames', function NoteNames() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var hornNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    this.hornNotes = function() {
    	return hornNotes;
    }
  });
