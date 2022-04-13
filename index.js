let assertionRan = false;

const functionWrapper = assertion => {
    const isFunction = typeof assertion === 'function';
    const keys = Object.keys(assertion);
    const wrappedFunction = (...params) => {
        assertionRan = true;
        return assertion(...params);
    };

    if(isFunction && !keys) {
        return wrappedFunction;
    }

    keys.forEach(key => {
        assertion[key] = functionWrapper(assertion[key]);
    });

    if(isFunction){
        return Object.assign(wrappedFunction, assertion);
    }

    return assertion;
};

function assertionTester (test) {
    if (!assertionRan) {
        this.currentTest.emit('error', new Error(`Assertion didn't run, check your test: ${this.currentTest.title}`));//eslint-disable-line no-invalid-this
    }
    if (!test) {
        assertionRan = false;
    }
}

module.exports = (assertion, test = false) => {
    if (global.afterEach) {
        afterEach('Assertion tester', function () {
            assertionTester.call(this, test);//eslint-disable-line no-invalid-this
        });
    }

    return functionWrapper(assertion);
};

module.exports.assertionTester = assertionTester;
