const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const todoschema = new Schema({
    title:{type: String, required : true},
    description:{type : String },
    completed : {type: Boolean, default: false},
    createdBy: {type: ObjectId, required: true}
});

const todo = mongoose.model("todo", todoschema);

module.exports = {
    todo
}