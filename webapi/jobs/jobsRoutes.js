var xJobModel = require('./jobsModel');
function routes(app) {
    console.log("Jobs - init routes");
    app.post('/api/jobs', function (req, res, next) {
        //console.log("/api/jobs-POST: start:" + req.body );
        var Job = xJobModel.jobModel();
        var newJob = new Job(req.body);
        newJob.save(function (err, job) {
            //console.log("/api/jobs-POST: create ok:" + JSON.stringify(job));
            if (err)
                return res.status(500).write({ message: "Error writing job!" });
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
    app.get('/api/jobs', function (req, res, next) {
        console.log("/api/jobs-GET: start");
        var jobs = xJobModel.jobModel();
        jobs.find({}, function (err, jobs) {
            if (err)
                return res.status(500).write({ message: "Error getting jobs!" });
            res.status(200).send(jobs);
        });
    });
}
exports.routes = routes;
;
//# sourceMappingURL=jobsRoutes.js.map