const express = require('express')
const router = express.Router()
const Task = require("../models/tasks")
const taskController = require("../controllers/tasks")

//Create new task
router.post('/', taskController.add_task)
//List all tasks
router.get('/', taskController.list_all)
//Get specific task
router.get('/:id', getTask, taskController.get_task)
//Delete task
router.delete('/:id', getTask, taskController.delete_task)
//Update title or completion of a specific task
router.patch('/:id', getTask, taskController.update_task)

async function getTask(req, res, next){
    let task
    try{
        task = await Task.findById(req.params.id)
        if (task == null){
            return res.status(404).json({message: "There is no task at that id"})
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
    res.task = task
    next()
}

module.exports = router