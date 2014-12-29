import mongoose = require("mongoose");
import jobModel = require('../models/job');

export class db {
    constructor(dbName:string){
        mongoose.connect('mongodb://localhost/'+dbName, (err) => {
            if (err) {
                throw err;
            }
            console.log("mongodb connected!");
            jobModel.populate();
        });
    }

    public disconnect() {
        mongoose.disconnect();
    }
}