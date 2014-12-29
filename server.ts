import express = require("express");
import vash = require("vash");
import xConfig = require("./webapi/services/config");
import xDb = require("./webapi/services/db");
import xJobsGet = require("./webapi/routes/jobsGet");

var app = express();

xDb.connectDB(xConfig.MONGOLAB_CONNECT_STRING)
    .then(() => {
        console.log("Connected to DB!")
    });

app.set("view engine", "vash");
app.set("views", __dirname + "/views");
app.engine(".html", vash.renderFile);

app.use('/Scripts', express.static(__dirname + '/Scripts'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/spa', express.static(__dirname + '/spa'));

app.get('/api/jobs', xJobsGet.getJobs);
 
app.get('*', (req: express.Request, res: express.Response, next) => {
    res.render("index.html");
});

if (!process.env.PORT) process.env.PORT = 3000;

var srv = app.listen(process.env.PORT, process.env.IP);
srv.on('listening', () => {
    console.log("webserver listening http requests!");
});
