const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const apiRouter = require("./Api");
const bodyParser = require("body-parser");
const db = require("./Database"); //POSTGRESSQL CODE
const cors = require('cors');
require('./Database/populatedb.js')

//Force: true wipes the database clean.
//this file is only run once, when the app is started.
// db.sync({ force: false }).then(async () => { //POSTGRESSQL CODE
//   //seed();
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: false }));
  
//   app.use(cors());

//   app.use("/api", apiRouter);

//   app.listen(PORT, ()=>{ //initializes ports
//     console.log(`Server is running on PORT${PORT}`);
//   });
// });

