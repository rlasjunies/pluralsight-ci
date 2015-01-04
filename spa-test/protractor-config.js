exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*-spec.js'],
    framework: 'mocha',
    mochaOpts: {
        reporter: "spec",
        slow: 3000,
    },
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};
console.log("toto");
//# sourceMappingURL=protractor-config.js.map