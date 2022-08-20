const expect = require('chai').expect;

describe('Tests with hooks will have trouble with hook.error() not existing', () => {
    
    beforeEach(() => {
        console.log('inside beforeEach');
        //expect(true).to.equal(false);
    });

    it('will be green', () => {
        console.log('will pass and be green');
    });

    it('will show yellow when in parallel but should show red since it fails', () => {
        console.log('should be red, but is yellow in parallel');
        expect(false).to.equal(true);
    });

    it('will be yellow, any other thrown error is marked yellow/broken', () => {
        console.log('should be yellow');
        throw new Error('test is broken');
    });

    afterEach(() => {
        console.log('afterEach hook');
        //expect(false).to.equal(true);
    });
});

