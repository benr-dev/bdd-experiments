const {When} = require('@cucumber/cucumber');
const  moduleUnderTest = require('../../lib/module-under-test');

When('some action occurs', function() {
    const result = moduleUnderTest();
    this.result = result;
})