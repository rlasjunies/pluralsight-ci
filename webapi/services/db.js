var mongoose = require("mongoose");
var Promise = require('bluebird');
exports.connectDB = Promise.promisify(mongoose.connect, mongoose);
//# sourceMappingURL=db.js.map