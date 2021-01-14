const db = require('../config/mongoose');
const Todo =require('../models/todo');

//---------------------------function to deleate a task-----------------------------
module.exports.delete = function(req,res){
    // get the id from query in the url
    let id = req.query.id;

    // find the task in database and delete it
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting object from data base',err);
        }
            
    })
    return res.redirect('/');
};

//-----------------------functin to reset the list---------------------------------
module.exports.reset = function(req,res){
    Todo.deleteMany({},function(err){
        if(err){
            console.log('action could not complete due to ',err);
        }
    })
    return res.redirect('/');
};