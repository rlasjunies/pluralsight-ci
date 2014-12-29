var mongoose = require("mongoose");
var jobModel = require('../models/job');
var Promise = require('bluebird');
exports.connectDB = Promise.promisify(mongoose.connect, mongoose);
var db = (function () {
    function db(dbName) {
        mongoose.connect('' + dbName, function (err) {
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
    db.prototype.disconnect = function () {
        mongoose.disconnect();
    };
    return db;
})();
exports.db = db;
//# sourceMappingURL=db.js.map