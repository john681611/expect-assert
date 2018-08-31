let expectAssertInstance;
const chai = require('chai');
const expectAssert = require('./index');


describe('expect assert', () => {
    it('should accept chai expect', () => {
        expectAssertInstance = expectAssert(chai.expect);
        chai.expect(expectAssertInstance).to.be.a('function');
        expectAssertInstance(true).to.be.ok;
    });
});
