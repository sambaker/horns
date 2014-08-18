'use strict';

describe('Service: key', function () {

  // load the service's module
  beforeEach(module('hornsApp'));

  // instantiate service
  var key;
  beforeEach(inject(function (_key_) {
    key = _key_;
  }));

  it('should do something', function () {
    expect(!!key).toBe(true);
  });

});
