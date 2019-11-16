const MongoClient = require("../Database")
const https = require('https');
const axios = require('axios')
const bodyParser = require("body-parser")

const url_ = "https://data.cityofnewyork.us/api/views/addd-ji6a/rows.json?accessType=DOWNLOAD";

console.log("RUNNING POPULATE!!")

const getShelterData = async () => {
    return await axios.get("https://data.cityofnewyork.us/api/views/addd-ji6a/rows.json")
}

const insertShelterData = async () => {
    const data = await getShelterData();
    const shelters = data.data.data
    
    const db = MongoClient.db('shelters')
    const run1 = db.collection('run1')
    run1.insertOne({
        name: "run1 data",
        array: shelters
    })
}

insertShelterData();
//const collection = MongoClient.collection('hurricane_shelters')
