import express = require("express");
import vash = require("vash");
import bodyParser = require('body-parser');

import xConfig = require("./webapi/services/config");
import xDb = require("./webapi/services/db"); 

export var app = express();
xDb.connect();

app.set("view engine", "vash");
app.set("views", __dirname + "/views");
app.engine(".html", vash.renderFile);

app.use(bodyParser.json()); 

app.use('/Scripts', express.static(__dirname + '/Scripts'));
//app.use('/public', express.static(__dirname + '/public'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/spa', express.static(__dirname + '/spa'));

import xJobsGet = require("./webapi/jobs/jobsRoutes");
xJobsGet.routes(app);

//app.get('/api/jobs', xJobsGet.getJobs);
 
app.get('*', (req: express.Request, res: express.Response, next) => {
    res.render("index.html");
});

if (!process.env.PORT) process.env.PORT = 3000;

var srv = app.listen(process.env.PORT, process.env.IP);
srv.on('listening', () => {
    console.log("webserver listening http requests!");
});
