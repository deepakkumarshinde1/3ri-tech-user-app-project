// const http = require("http");
import http from "http";

// create a server
// browser == request ==> Server
// Server == Response ==> Browser
let server = http.createServer(async (request, response) => {
  let url = request.url;
  if (url !== "/favicon.ico") {
    switch (url) {
      case "/":
        response.write(await getHTMLFile("index.html"));
        break;

      case "/contact-us":
        response.write("Contact Us Page ");
        break;

      case "/about":
        response.write("About Us Page ");
        break;

      case "/products":
        response.write("Product Page ");
        break;

      default:
        response.write("Page Not Found ");
        break;
    }
    response.end();
  }
});

// PORT
const PORT = 3001;
server.listen(PORT, () => {
  console.log("server started at port ", PORT);
});

// read a file by using fs
import fs from "fs";
async function getHTMLFile(fileName = "404.html") {
  let path = "./public/" + fileName;
  let data = fs.readFileSync(path);
  return Promise.resolve(data);
}
