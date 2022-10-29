const {Then} = require('@cucumber/cucumber');
const assert = require('assert');

Then('something happens', function() {
    assert.equal(this.result, 'something happens');
})