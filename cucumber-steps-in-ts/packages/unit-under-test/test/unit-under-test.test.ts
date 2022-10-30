import 'jest';
import 'chai';
import { UnitUnderTest } from '../src/unit-under-test';

describe('unit tests', () => {
    it('can be instantiated', () => {
        expect(new UnitUnderTest()).toBeDefined;
    })

    it('does something', () => {
        const uut = new UnitUnderTest();
        expect(uut.doSomething()).toEqual('Did something');
    })

    it('does something with a numeric parameter', () => {
        const uut = new UnitUnderTest();
        expect(uut.doSomethingWithThisNumber(10)).toEqual('Did something with 10');
    })
})