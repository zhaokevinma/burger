// Server

// dependency
var express = require("express");
var exphbs = require("express-handlebars");

// port configuration - {heroku} || local
var PORT = process.env.PORT || 8080;

// define app
var app = express();

// serve static content under /public 
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up handlebar
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// module - routers/router/controller
var routes = require("./controllers/burgers_controller.js");

// set up routes
app.use(routes);

// main - open port and listen
app.listen(PORT, function() {
  // console log server status
  console.log("Server listening on: http://localhost:" + PORT);
});