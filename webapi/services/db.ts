import mongoose = require("mongoose");
import jobModel = require('../models/job');
import Promise = require('bluebird');

export var connectDB = Promise.promisify(mongoose.connect, mongoose);

export class db {
    constructor(dbName:string){
        mongoose.connect(''+dbName, (err) => {
            if (err) {
                throw err;
            }
            console.log("mongodb connected!");
            jobModel.populate();
                //.then(() => {
                //    console.log("populating finished!");
                //})
                //.catch((err) => {
                //    console.log("populating error!");
                //});
        });
    }

    public disconnect() {
        mongoose.disconnect();
    }
}