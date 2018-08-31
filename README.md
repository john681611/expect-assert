# expect-assert
Extension for mocha that expects any assertion to have run in each test otherwise throwing error.

# Tested with:
* Chai:
  * Expect

## Installation
1.  Require at start of tests or in your testing config.
    ```
    const expectAssert = require('./index');
    ```
2. Instantiate with your assertion of choice.
    ```
    const expect = expectAssert(chai.expect);
    ```
3. Use where you need.
