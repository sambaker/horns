'use strict';

describe('Filter: musicNote', function () {

  // load the filter's module
  beforeEach(module('hornsApp'));

  // initialize a new instance of the filter before each test
  var musicNote;
  beforeEach(inject(function ($filter) {
    musicNote = $filter('musicNote');
  }));

  it('should return the input prefixed with "musicNote filter:"', function () {
    var text = 'angularjs';
    expect(musicNote(text)).toBe('musicNote filter: ' + text);
  });

});
