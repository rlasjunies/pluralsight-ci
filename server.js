var express = require("express");
var vash = require("vash");
var bodyParser = require('body-parser');
var xDb = require("./webapi/services/db");
exports.app = express();
xDb.connect();
exports.app.set("view engine", "vash");
exports.app.set("views", __dirname + "/views");
exports.app.engine(".html", vash.renderFile);
exports.app.use(bodyParser.json());
exports.app.use('/Scripts', express.static(__dirname + '/Scripts'));
//app.use('/public', express.static(__dirname + '/public'));
exports.app.use('/styles', express.static(__dirname + '/styles'));
exports.app.use('/fonts', express.static(__dirname + '/fonts'));
exports.app.use('/spa', express.static(__dirname + '/spa'));
var xJobsGet = require("./webapi/jobs/jobsRoutes");
xJobsGet.routes(exports.app);
//app.get('/api/jobs', xJobsGet.getJobs);
exports.app.get('*', function (req, res, next) {
    res.render("index.html");
});
if (!process.env.PORT)
    process.env.PORT = 3000;
var srv = exports.app.listen(process.env.PORT, process.env.IP);
srv.on('listening', function () {
    console.log("webserver listening http requests!");
});
//# sourceMappingURL=server.js.map