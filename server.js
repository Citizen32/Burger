var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


var expH = require("express-handlebars");

app.engine("handlebars", expH({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
