// import express
const express = require("express");
const routing = require("./app/routes/Routing");

// instance of express
const app = express();

app.set("views", "./app/view");
app.set("view engine", "pug");

// static file folder
app.use(express.static("./public"));

// inject routing in express js app
app.use("/", routing);

// listener
const PORT = 3002;
app.listen(PORT, () => {
  console.log("server is running on port ::" + PORT);
});
