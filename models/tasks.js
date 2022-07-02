const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        ISODate(){}
    }
})

module.exports = mongoose.model("Task", tasksSchema)