import chai = require("chai");
import xDb = require('../webapi/services/db');
import xConfig = require('../webapi/services/config');
import xJob = require('../webapi/models/job');
import Promise = require('bluebird');
import mongoose = require('mongoose');

//var Promise = promise;
var expect = chai.expect;


describe("get jobs", function () {

    var jobs: xJob.IJobDocument[];

    before((done) => {
        xDb.connectDB(xConfig.MONGOLAB_CONNECT_STRING)
            .then(xJob.resetJobs)
            .then(xJob.populate)
            .then(xJob.findJobs)
            .then(function (collection) {
                jobs = collection;
                done();
            });
    }); 

    it("should never be empty since jobs are seeded", function (done) {
        expect(jobs.length).to.be.at.least(1);
        done();
    });

    it("title should not be empty", function (done) {
        expect(jobs[0].title).to.be.not.empty;
        done();
    });

    it("decription should not be empty", function (done) {
        expect(jobs[0].description).to.be.not.empty;
        done();
    });

});
