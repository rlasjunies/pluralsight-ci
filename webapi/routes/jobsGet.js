var xJob = require('../models/job');
function getJobs(req, res, next) {
    var jobs = xJob.jobModel();
    jobs.find({}, function (err, jobs) {
        if (err)
            return res.status(500).write({ message: "Error getting jobs!" });
        res.status(200).send(jobs);
    });
}
exports.getJobs = getJobs;
;
//# sourceMappingURL=jobsGet.js.map