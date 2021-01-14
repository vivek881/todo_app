const db = require('../config/mongoose');
const Todo =require('../models/todo');

module.exports.add_task = function(req,res){
    Todo.create({
        task: req.body.todo_item
    },function(err,newRecord){
        if(err){
            console.log('error in creating contact!');
            return ;
        }
        console.log('**********',newRecord);
    });
    return res.redirect('/');
};