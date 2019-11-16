const mongoose = require('mongoose');
const url = "mongodb+srv:lehmanhacks:saveyouself@lehman-hacks-database-jqoif.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
