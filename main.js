const port = 8000;
const path = require('path');
const express = require('express');

const app = express();
// const db = require('./config/mongoose');
// const Todo =require('./models/todo');
/*-------Setting properties in Express-------*/
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

/*-------------------------------------------*/
app.use(express.urlencoded());
app.use(express.static('assets'));


/*---------------handelling routes-----------------------*/
app.use('/',require('./routes/index'));
app.use('/add-task',require('./routes/index'));



app.listen(port,function(err){
    if(err){
        console.log("the server did not start due to",err);
    }
    console.log("server has started on port :",port);
});
