const {assert} = require('chai');
const {performance} = require('perf_hooks');
const countPaths = require('../src/index');

describe('Test case 1', function () {

    it('n = 10000, m = 99361, count of paths 526200210', function () {
        let start = performance.now()
        let end = performance.now()
        t1 = end - start
        assert.equal(result, 526200210);
    });

    after(() => {
        let sumTime = t1
        console.log('Test case 1:' + sumTime)
    });
});