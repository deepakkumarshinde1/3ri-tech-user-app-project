const { homePage } = require("../controller/UserController");

let routing = require("express").Router();

routing.get("/", homePage); // home page

// export routing
module.exports = routing;
