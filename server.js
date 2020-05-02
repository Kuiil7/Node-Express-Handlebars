// Dependencies

//var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burger_controller.js");
var path = require("path");
require("dotenv").config();

const express = require('express'),
			app = express(),
			port = process.env.PORT || 8080


//app.use(methodOverride("_method"));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up rendering engine, Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static files and routes (middleware)
//if (process.env.NODE_ENV === "production") {
  app.use(express.static("./public"));
//};

app.use("/", router);

// Start server
app.listen(port, function(){
    console.log(`🌍 Server listening on port ${port}`);

  });
