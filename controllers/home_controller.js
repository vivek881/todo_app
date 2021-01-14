const db = require('../config/mongoose');
const Todo =require('../models/todo');
// todo_activities =[
//     {
//         task:"bring vegetables"
//     },
//     {
//         task:"boil milk"
//     }
// ];
module.exports.home = function(req,res){
    Todo.find({},function(err,tasks){
        if(err){
            console.log('error in fetching ',error);
            return ; 
        }
        return res.render('index',{todo:tasks});
    });
    
}

