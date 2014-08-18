'use strict';

describe('Filter: Note', function () {

  // load the filter's module
  beforeEach(module('hornsApp'));

  // initialize a new instance of the filter before each test
  var Note;
  beforeEach(inject(function ($filter) {
    Note = $filter('Note');
  }));

  it('should return the input prefixed with "Note filter:"', function () {
    var text = 'angularjs';
    expect(Note(text)).toBe('Note filter: ' + text);
  });

});
