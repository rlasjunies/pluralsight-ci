var mongoose = require("mongoose");
var jobModel = require('../models/job');
var db = (function () {
    function db(dbName) {
        mongoose.connect('' + dbName, function (err) {
            if (err) {
                throw err;
            }
            console.log("mongodb connected!");
            jobModel.populate();
        });
    }
    db.prototype.disconnect = function () {
        mongoose.disconnect();
    };
    return db;
})();
exports.db = db;
//# sourceMappingURL=db.js.map