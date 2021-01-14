const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const addController = require('../controllers/add_controller');
const deleteTodo = require('../controllers/delete_todo');

        //-------------------------routes handelling different tasks---------------------------//
router.get('/',homeController.home);
router.post('/add-task',addController.add_task);
router.get('/delete-todo',deleteTodo.delete);
router.get('/reset-list',deleteTodo.reset);
module.exports =router;