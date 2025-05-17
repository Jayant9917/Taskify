const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; 

const todoSchema = new Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    completed: {type: Boolean, default: false},
    userId: {type: ObjectId, ref: 'user', required: true}
}, { timestamps : true});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
};


