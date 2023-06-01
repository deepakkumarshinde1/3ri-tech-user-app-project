// fs
// read a file by using fs
const fs = require("fs");

module.exports.getHTMLFile = async (fileName = "404.html") => {
  let path = "../public/" + fileName;
  let data = fs.readFileSync(path);
  return Promise.resolve(data);
};
// export
