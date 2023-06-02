// We will extract the routing from express

let routing = require("express").Router();

// / => home page

// request :: client ===> server
// response :: server ===> client
routing.get("/", (request, response) => {
  response.send("Welcome to express");
});

// /about
routing.get("/about", (request, response) => {
  response.send("This is about page");
});

// /contact

// export routing
module.exports = routing;
