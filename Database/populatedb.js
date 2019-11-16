const MongoClient = require("../Database")
const https = require('https');

const url = "https://data.cityofnewyork.us/api/views/addd-ji6a/rows.json?accessType=DOWNLOAD";

https.get(url, (resp) => {
  let data = '';
    console.log("HELLO!\n", resp.body, "BBYE!\n")
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


//const collection = MongoClient.collection('hurricane_shelters')
