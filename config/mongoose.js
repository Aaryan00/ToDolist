const mongoose = require('mongoose');

// mongoose.connect('mongodb://<username>:<password>@cluster0-shard-00-00.gc7yg.mongodb.net:27017,cluster0-shard-00-01.gc7yg.mongodb.net:27017,cluster0-shard-00-02.gc7yg.mongodb.net:27017/Todolist?ssl=true&replicaSet=atlas-nevph8-shard-0&authSource=admin&retryWrites=true&w=majority');



const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to MongoDB');
});


module.exports = db;

