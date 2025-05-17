const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.objectId;

const userSchema = new Schema({
    username : String,
    password : String
});

const TodoSchema = new Schema({
    userId : objectId,
    title : String,
    completed : Boolean
});

const user = mongoose.model('user', userSchema);
const todo = mongoose.model('todo', TodoSchema);

module.export = { 
    user,
    todo
}

