import express = require('express');
import xJobModel = require('./jobsModel'); 
import db = require('../services/db');
import Promise = require("bluebird");

export function routes(app: express.Application) {
    console.log("Jobs - init routes");

    app.post('/api/jobs', (req: express.Request, res: express.Response, next) => {
        //console.log("/api/jobs-POST: start:" + req.body );

        var Job = xJobModel.jobModel();
        var newJob = new Job(req.body);

        newJob.save<xJobModel.IJobDocument>((err, job) => {
            //console.log("/api/jobs-POST: create ok:" + JSON.stringify(job));
            if (err) return res.status(500).write({ message: "Error writing job!" });

            res.status(200).send(job); 

            //Job.findById(doc._id).exec((err, doc) => {
            //    console.log("222222222/api/jobs-POST: create ok:" + JSON.stringify(doc.toJSON()));
            //    if (err) return next(err);

            //})
        });
            
        //return xJobModel.jobModel().create(req.body).then((resp) => {
        //            console.log("/api/jobs-POST: create ok:" + JSON.stringify(resp));
        //            return res.status(200).send(resp);
        //        })
        //        .reject((err) => {
        //            console.log("error creating post");
        //            throw err;
        //        });
    });

    app.get('/api/jobs', (req: express.Request, res: express.Response, next) => {
        console.log("/api/jobs-GET: start");
        var jobs: xJobModel.IJobModel = xJobModel.jobModel();

        jobs.find({}, (err, jobs) => {
            if (err) return res.status(500).write({ message: "Error getting jobs!" });

            res.status(200).send(jobs);
        });
    });
};