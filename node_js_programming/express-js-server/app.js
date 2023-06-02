// import express
const express = require("express");
const routing = require("./routes/Routing");

// instance of express
const app = express();

// inject routing in express js app
app.use("/", routing);
// listener
const PORT = 3002;
app.listen(PORT, () => {
  console.log("server is running on port ::" + PORT);
});
