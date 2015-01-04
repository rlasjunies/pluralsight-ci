///ts:ref=angular.d.ts
/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/> ///ts:ref:generated
///ts:ref=angular-mocks.d.ts
/// <reference path="../Scripts/typings/angularjs/angular-mocks.d.ts"/> ///ts:ref:generated
///ts:ref=chai.d.ts
/// <reference path="../Scripts/typings/chai/chai.d.ts"/> ///ts:ref:generated
///ts:ref=mocha.d.ts
/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/> ///ts:ref:generated
///ts:ref=chai.d.ts
/// <reference path="../Scripts/typings/chai/chai.d.ts"/> ///ts:ref:generated
///ts:ref=chai-as-promised
/// <reference path="../Scripts/typings/chai-as-promised/chai-as-promised.d.ts" />

///ts:import=jobsService,xJobs
/// No file or directory matched name "jobsService" ///ts:import:generated

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
 
describe("jobs", () => {

    it("jobs list should be accessible", () => {
        browser.get('/');
        expect(browser.getTitle()).to.eventually.equal('pluralsight-ci');
    });

    it("jobs list should be populated", () => {
    });

    it("posting job should work", () => {
    });
});