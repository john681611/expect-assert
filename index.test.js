const chai = require('chai');
const expectAssert = require('./index');

describe('chai', () => {
    beforeEach(() => {
        global.assertionRan = false;
    });

    describe('expect', () => {
        it('should accept expect', () => {
            const expect = expectAssert(chai.expect, true);
            chai.expect(expect).to.be.a('function');
            expect(true).to.be.ok;
        });
    });

    describe('assert', () => {
        it('should accept assert as object', () => {
            const assert = expectAssert(chai.assert, true);
            chai.expect(assert).to.be.a('function');
            assert.isTrue(true);
        });

        it('should accept assert as function', () => {
            const assert = expectAssert(chai.assert, true);
            chai.expect(assert).to.be.a('function');
            assert('foo' !== 'bar');
        });
    });

    describe('should', () => {
        it('should accept should as object', () => {
            const should = expectAssert(chai.should(), true);
            chai.expect(should).to.be.a('Object');
            const bar = 'bar';
            should.equal(bar, 'bar');
        });

        it.skip('should accept should as child variable', () => {
            const should = expectAssert(chai.should(), true);
            chai.expect(should).to.be.a('Object');
            const bar = 'bar';
            bar.should.equal('bar');
        });
    });
});
