var x = require('ngMidwayTester');
var expect = chai.expect;
describe("posting job", function () {
    var modApp;
    var tester;
    beforeEach(function () {
        if (tester) {
            tester.destroy();
        }
        tester = x.ngMidwayTester('app');
    });
    it("app module should be register", function () {
        var $controller = tester.inject("$controller");
        var ctlr = $controller("jobsController");
        console.log("ctlr:" + JSON.stringify(ctlr));
        console.log("ctlr.message" + ctlr.message);
        expect(modApp.controller("jobsController")).not.to.equal(null);
    });
    describe("Dependencies:", function () {
        it("should have 'jobsController' as a dependency", function () {
        });
        it("should have 'jobsService' as a dependency", function () {
            expect(modApp.service('jobsService')).not.to.be.equal(null);
        });
    });
});
//# sourceMappingURL=jobs-specs.js.map