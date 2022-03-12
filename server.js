// using express because it is the de facto framework for nodejs
var express = require("express");
var path = require("path");
var app = express();

// middleware (having access to request and response, send files over the client.
// send over the scripts
app.use('/js', express.static(path.join(__dirname, "public/js")));
app.use('/css', express.static(path.join(__dirname, "public/css")));

app.locals.content = require("./data-json/content.json");

// set up views (pages)
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (request, response) => {
  response.render("index");
})

app.listen(port = process.env.PORT || 3000);
