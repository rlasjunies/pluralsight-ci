var mongoose = require("mongoose");
var jobSchema = new mongoose.Schema();
jobSchema.add({
    title: { type: String },
    description: { type: String }
});
function jobs() {
    return mongoose.model('Job', jobSchema);
}
exports.jobs = jobs;
function populate() {
    var jobModel = jobs(); //mongoose.model<IJobDocument>('job');
    jobModel.find({}, function (err, jobs) {
        if (jobs.length === 0) {
            var tmpJob;
            jobModel.create({ title: 'Cook', description: 'Chef required' });
            jobModel.create({ title: 'programmer', description: 'Super programmer required' });
            jobModel.create({ title: 'Project manager', description: 'Super project manager required' });
            console.log("Jobs seeded!");
        }
        else {
            console.log("Jobs already exists!");
        }
    });
}
exports.populate = populate;
//# sourceMappingURL=job.js.map