'use strict';

describe('Service: NoteNames', function () {

  // load the service's module
  beforeEach(module('hornsApp'));

  // instantiate service
  var NoteNames;
  beforeEach(inject(function (_NoteNames_) {
    NoteNames = _NoteNames_;
  }));

  it('should do something', function () {
    expect(!!NoteNames).toBe(true);
  });

});
