//library required
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_db',{useNewUrlParser:true});

////aquire the connection (to check if it is connected )
const db=mongoose.connection;

//error handelling
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("SUCESSFULLY CONNECTED TO DATA BASE");
  });

