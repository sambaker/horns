'use strict';

/**
 * @ngdoc service
 * @name hornsApp.key
 * @description
 * # key
 * Service in the hornsApp.
 */
// angular.module('hornsApp')
//   .value('chromaticScale', function chromaticScale() {
//   	return 


angular.module('hornsApp')
  .service('Key', function Key() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var noteOrder = {
    	0: 'C',
    	1: 'D',
    	2: 'E',
    	3: 'F',
    	4: 'G',
    	5: 'A',
    	6: 'B'
    };
    var notePositions = {
    	C: 0,
    	D: 1,
    	E: 2,
    	F: 3,
    	G: 4,
    	A: 5,
    	B: 6
    };

    var indexToNotes = [
    	['C', 'B#', 'Dbb'],
    	['C#', 'Db', 'B##'],
    	['D', 'C##', 'Ebb'],
    	['D#', 'C###', 'Eb'],
    	['E', 'D##', 'Fb'],
    	['F', 'E#', 'Gbb'],
    	['F#', 'E##', 'Gb'],
    	['G', 'F##', 'Abb'],
    	['G#', 'F###', 'Ab'],
    	['A', 'G##', 'Bbb'],
    	['A#', 'Bb', 'G###'],
    	['B', 'Cb', 'A##']
    ];

    var noteToIndex = {};
    _.each(indexToNotes, function(notes, i) {
    	_.each(notes, function(note) {
    		noteToIndex[note] = i;
    	})
    })

    var noteLookup = {
    	'R': [0, 0],
    	'm2': [1, 1],
    	'M2': [2, 1],
    	'2': [2, 1],
    	'm3': [3, 2],
    	'M3': [4, 2],
    	'3': [4, 2],
    	'4': [5, 3],
    	'#4': [6, 3],
    	'b5': [6, 4],
    	'5': [7, 4],
    	'm6': [8, 5],
    	'M6': [9, 5],
    	'6': [9, 5],
    	'm7': [10, 6],
    	'M7': [11, 6],
    	'7': [11, 6]
    };

    this.key = function(root) {
    	var i = noteToIndex[root];
    	if (_.isUndefined(i)) {
    		throw 'Invalid key!';
    	}

    	return {
    		// Root note letter, excluding incidentals
    		rootNote: root[0],
    		// 0 through 6
    		rootPosition: notePositions[root[0]],
    		// Index into note names table
    		rootIndex: i
    	}
    }

    function keyNote(key, note) {
    	var intervalData = noteLookup[note];
    	if (_.isUndefined(intervalData)) {
    		throw 'Invalid note!';
    	}
    	var noteName = noteOrder[(key.rootPosition + intervalData[1]) % 7]
    	//return noteName;
    	var index = (key.rootIndex + intervalData[0]) % 12;
    	var options = indexToNotes[index];
    	var result;
    	_.each(options, function(option) {
    		if (option[0] === noteName) {
    			result = option;
    		}
    	});
    	if (!result) {
    		result = options[0];
    		// throw 'Invalid lookup!'
    	}
    	return {
    		name: result,
    		index: index
    	}
    }

    function keyNotes(key, notes) {
    	var result = [];
    	_.each(notes, function(note) {
    		result.push(keyNote(key, note));
    	})
    	return result;
    }

    var scaleDefinitions = {
    	'major': ['R', '2', '3', '4', '5', '6', '7'],
    	'minor': ['R', '2', 'm3', '4', '5', 'm6', 'm7'],
    	'whole-tone': ['R', '2', '3', '#4', 'm6', 'm7']
    }

    this.scaleTypes = function() {
    	return _.keys(scaleDefinitions);
    }

    this.scale = function(key, name) {
    	var def = scaleDefinitions[name];
    	if (!def) {
    		throw "Invalid scale name!";
    	}
    	return keyNotes(key, def);
    }

    this.scaleMajor = function(key) {
    	return this.scale(key, 'major');
    }

    this.scaleMinor = function(key) {
    	return this.scale(key, 'minor');
    }
  });
