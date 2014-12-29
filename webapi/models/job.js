var mongoose = require("mongoose");
var Promise = require("bluebird");
var jobSchema = new mongoose.Schema();
jobSchema.add({
    title: { type: String },
    description: { type: String }
});
function jobModel() {
    return mongoose.model('job', jobSchema);
}
exports.jobModel = jobModel;
function findJobs(query) {
    return Promise.cast(jobModel().find(query).exec());
}
exports.findJobs = findJobs;
var createJob = Promise.promisify(jobModel().create, jobModel());
function resetJobs() {
    return new Promise(function (resolve, reject) {
        mongoose.connection.collection('jobs').drop(resolve, reject);
    });
}
exports.resetJobs = resetJobs;
var jobsArray = [
    { title: 'Cook', description: 'Chef required' },
    { title: 'programmer', description: 'Super programmer required' },
    { title: 'Project manager', description: 'Super project manager required' }
];
function populate() {
    return findJobs({}).then(function (jobCollection) {
        if (jobCollection.length === 0) {
            return Promise.map(jobsArray, function (job) {
                return createJob(job);
            });
            console.log("Jobs seeded!");
        }
    });
}
exports.populate = populate;
//# sourceMappingURL=job.js.map