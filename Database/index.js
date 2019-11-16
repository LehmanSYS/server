
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://lehmanhacks:saveyouself@lehman-hacks-database-jqoif.gcp.mongodb.net/test?retryWrites=true&w=majority";

const city_data = {};


MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db('shelters');
  const collection = db.collection('test');
  collection.insertOne({name: 'Roger'}, (err, result) => {

  });
    client.close();
});



module.exports = MongoClient;