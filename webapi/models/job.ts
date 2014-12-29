import mongoose = require("mongoose");

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

export function jobs(): IJobModel {
    return <IJobModel>mongoose.model<IJobDocument>('Job', jobSchema);
}

export function populate() {
    var jobModel = jobs(); //mongoose.model<IJobDocument>('job');

    jobModel.find({}, (err, jobs) => {
        if (jobs.length === 0) {
            var tmpJob: IJobDocument;
            jobModel.create({ title: 'Cook', description: 'Chef required' });
            jobModel.create({ title: 'programmer', description: 'Super programmer required' });
            jobModel.create({ title: 'Project manager', description: 'Super project manager required' });

            console.log("Jobs seeded!");
        } else {
            console.log("Jobs already exists!");
        }
    });

}