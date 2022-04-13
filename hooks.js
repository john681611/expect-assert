const assertionTester = require('./').assertionTester;

module.exports.mochaHooks = {
    afterEach () {
        assertionTester.call(this);
    }
};
