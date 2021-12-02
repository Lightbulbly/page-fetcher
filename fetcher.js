// Implement a node app called fetcher.js.

// It should take two command line arguments:

// a URL
// a local file path
// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
const request = require('request');
const fs = require('fs');
let content;
const URL = process.argv[2];
const filePath = process.argv[3];
// const readline = require('readline');



content = request(URL, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(URL);
  // console.log(body.url);
  // console.log(body.explanation);
  
  fs.writeFile(filePath, JSON.stringify(content), err => {
    if (err) {
      console.error(err);
      return;
    }
    // console.log(filePath);
    console.log("file written successfully");
    // return body;
    
  });
  // console.log(JSON.stringify(content));
});