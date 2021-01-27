const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/Todo_List');
mongoose.connect('mongodb://Aryan_agrawal:mnaamnaa11@cluster0-shard-00-00.gc7yg.mongodb.net:27017,cluster0-shard-00-01.gc7yg.mongodb.net:27017,cluster0-shard-00-02.gc7yg.mongodb.net:27017/Todolist?ssl=true&replicaSet=atlas-nevph8-shard-0&authSource=admin&retryWrites=true&w=majority');



const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to MongoDB');
});


module.exports = db;


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@cluster0.onedj.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



// const uri = "mongodb+srv://aryanagrawalfirozabad@gmail.com:Aryan1234.@cluster0.onedj.mongodb.net/TodoList?retryWrites=true&w=majority";
// module.exports = {
// mongoURI:"mongodb://Aryan_agrawal:mnaamnaa11@cluster0-shard-00-00.gc7yg.mongodb.net:27017,cluster0-shard-00-01.gc7yg.mongodb.net:27017,cluster0-shard-00-02.gc7yg.mongodb.net:27017/Youtube?ssl=true&replicaSet=atlas-nevph8-shard-0&authSource=admin&retryWrites=true&w=majority"
// }
