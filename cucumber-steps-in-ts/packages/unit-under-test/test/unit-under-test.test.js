"use strict";
exports.__esModule = true;
require("jest");
require("chai");
var unit_under_test_1 = require("../src/unit-under-test");
describe('unit tests', function () {
    it('can be instantiated', function () {
        expect(new unit_under_test_1.UnitUnderTest()).toBeDefined;
    });
    it('does something', function () {
        var uut = new unit_under_test_1.UnitUnderTest();
        expect(uut.doSomething()).toEqual('Did something');
    });
});
