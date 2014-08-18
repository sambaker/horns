'use strict';

/**
 * @ngdoc service
 * @name hornsApp.Horn
 * @description
 * # Horn
 * Service in the hornsApp.
 */
angular.module('hornsApp')
  .service('Horn', function Horn() {

    function partial() {
      var p = [];
      for (var i = 0; i < arguments.length; i += 3) {
        p.push({
          index: arguments[i],
          octave: arguments[i+1],
          score: arguments[i+2]
        });
      }
      return {
        positions: p
      }
    }

    var partials = [
      partial(
        10, 2, 10,
        9, 2, 10,
        8, 2, 10,
        7, 2, 10,
        6, 2, 10,
        5, 2, 10,
        4, 2, 10
        ),
      partial(
        5, 3, 10,
        4, 3, 10,
        3, 3, 10,
        2, 3, 10,
        1, 3, 10,
        0, 3, 10,
        11, 2, 10
        ),
      partial(
        10, 3, 10,
        9, 3, 10,
        8, 3, 10,
        7, 3, 10,
        6, 3, 10,
        5, 3, 5,
        4, 3, 5
        ),
      partial(
        2, 4, 10,
        1, 4, 10,
        0, 4, 10,
        11, 3, 10,
        10, 3, 5,
        9, 3, 5,
        8, 3, 5
        ),
      partial(
        5, 4, 10,
        4, 4, 10,
        3, 4, 10,
        2, 4, 5,
        1, 4, 5,
        0, 4, 5,
        11, 3, 5
        ),
      partial(
        8, 4, 10,
        7, 4, 10,
        6, 4, 10,
        5, 4, 5,
        4, 4, 5,
        3, 4, 5,
        2, 4, 5
        ),
      partial(
        10, 4, 10,
        9, 4, 10,
        8, 4, 10,
        7, 4, 5,
        6, 4, 5,
        5, 4, 5,
        4, 4, 5
        ),
      partial(
        0, 5, 10,
        11, 4, 10,
        10, 4, 5,
        9, 4, 5,
        8, 4, 5,
        7, 4, 5,
        6, 4, 5
        ),
      partial(
        2, 5, 10,
        1, 5, 10,
        0, 5, 5,
        11, 4, 5,
        10, 4, 5,
        9, 4, 5,
        8, 4, 5
        )
    ];

    // TODO:
    this.noteLocations = { undefined: {} };
    _.each(partials, function(partial, i) {
      _.each(partial.positions, function(position, j) {
        if (!this.noteLocations[position.octave]) {
          this.noteLocations[position.octave] = {};
        }
        if (!this.noteLocations[position.octave][position.index]) {
          this.noteLocations[position.octave][position.index] = [];
        }
        if (!this.noteLocations[undefined][position.index]) {
          this.noteLocations[undefined][position.index] = [];
        }
        this.noteLocations[position.octave][position.index].push({
          partial: i,
          position: j,
          index: position.index,
          octave: position.octave,
          score: position.score
        });
        this.noteLocations[undefined][position.index].push({
          partial: i,
          position: j,
          index: position.index,
          octave: position.octave,
          score: position.score
        });
      }, this)
    }, this)

    _.each(this.noteLocations, function(locationsByOctave) {
      _.each(locationsByOctave, function(locationsByNote) {
        locationsByNote.sort(function(a, b) {
          return b.score - a.score;
        });
      })
    }, this)

    this.definition = {
      partials: partials,
      partialsReversed: partials.slice().reverse()
    }

    this.createSelection = function(notes) {
      var selection = [];
      _.each(notes, function(note) {
        if (this.noteLocations[note.octave]) {
          var locations = this.noteLocations[note.octave][note.index];
          _.each(locations, function(location) {
            selection.push({
              location: location,
              name: note.name
            });
          });
        }
      }, this);
console.log("SELECTION",selection)
      return selection;
    }

    console.log("Horn definition", this.definition);
  });
