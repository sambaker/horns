'use strict';

describe('Service: Horn', function () {

  // load the service's module
  beforeEach(module('hornsApp'));

  // instantiate service
  var Horn;
  beforeEach(inject(function (_Horn_) {
    Horn = _Horn_;
  }));

  it('should do something', function () {
    expect(!!Horn).toBe(true);
  });

});
