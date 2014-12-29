var express = require("express");
var vash = require("vash");
var app = express();
app.set("view engine", "vash");
app.set("views", __dirname + "/views");
app.engine(".html", vash.renderFile);
app.use('/Scripts', express.static(__dirname + '/Scripts'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/spa', express.static(__dirname + '/spa'));
app.get('*', function (req, res, next) {
    res.render("index.html");
});
app.listen(process.env.PORT, process.env.IP);
console.log("webserver started!");
//# sourceMappingURL=server.js.map