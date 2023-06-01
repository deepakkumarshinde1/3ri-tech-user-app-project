// const http = require("http");
const http = require("http");
const getHTMLFile = require("./readHtmlFile");

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
        response.write(await getHTMLFile("contact-us.html"));
        break;

      case "/about":
        response.write(await getHTMLFile("about-us.html"));
        break;

      case "/products":
        response.write(await getHTMLFile("product.html"));
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
