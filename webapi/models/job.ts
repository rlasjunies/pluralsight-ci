import mongoose = require("mongoose");
import Promise = require("bluebird");

export interface IJobModel extends mongoose.Model<IJobDocument> {
}

// used to extend the toJSON function
export interface IJobSchema extends mongoose.Schema {
    methods: any
}

export interface IJobDocument extends mongoose.Document {
    //_id: string;
    title: string;
    description: string;
}

var jobSchema: IJobSchema = <IJobSchema> new mongoose.Schema();
jobSchema.add({
    title: { type: String },
    description: { type: String }
});

export function jobModel(): IJobModel {
    return <IJobModel>mongoose.model<IJobDocument>('job', jobSchema);
}

export function findJobs(query) {
    return Promise.cast(jobModel().find(query).exec());
} 

var createJob = Promise.promisify(jobModel().create, jobModel());

export function resetJobs() {
    return new Promise((resolve, reject) => {
        mongoose.connection.collection('jobs').drop(resolve, reject);
    });
}

var jobsArray = [
    { title: 'Cook', description: 'Chef required' },
    { title: 'programmer', description: 'Super programmer required' },
    { title: 'Project manager', description: 'Super project manager required' }
];

export function populate() {

    return findJobs({}).then((jobCollection) => {
        if (jobCollection.length === 0) {

            return Promise.map(jobsArray, (job) => {
                return createJob(job);
            });

            console.log("Jobs seeded!");
        }
    });
}