const Task = require("../models/tasks")

exports.get_task = (req, res) => {
    res.json(res.task)
}

exports.list_all = async (req, res) => {
    try{
        const Tasks = await Task.find()
        res.json(Tasks)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.delete_task = async (req, res) => {
    try{
        await res.task.remove()
        res.json({message: "Task deleted"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }

}

exports.update_task = async  (req, res) => {
    if (req.body.title != null){
        res.task.title = req.body.title
    }
    if (req.body.description != null){
        res.task.description = req.body.description
    }
    if (req.body.id != null){
        res.task.id = req.body.id
    }
    try{
        const updatedTask = await res.task.save()
        res.json(updatedTask)
    }
    catch(err){
        res.send(400).json({message: err.message})
    }
}

exports.add_task = async (req, res) => {
    const task = new Task({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    })
    try{
        const newTask = await task.save()
        res.status(201).json(newTask)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}