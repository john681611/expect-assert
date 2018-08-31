let assertionRan = false;

module.exports = (assertion) => {
    afterEach(() => {
        if (!assertionRan) {
            throw new Error('Assertion didn\'t run, check your test');
        }
        assertionRan = false;
    });

    return (fn) => {
        assertionRan = true;
        return assertion(fn);
    };
};
