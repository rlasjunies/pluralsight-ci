import express = require('express');
import xJob = require('../models/job');

export function getJobs(req: express.Request, res: express.Response, next) {
    var jobs: xJob.IJobModel = xJob.jobModel();

    jobs.find({}, (err, jobs) => {
        if (err) return res.status(500).write({ message: "Error getting jobs!" });

        res.status(200).send(jobs);
    });
};