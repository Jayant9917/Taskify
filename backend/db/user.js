const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    username : { type: String, required: true},
    emial: { type: String, require: true, unique: true},
    password: { type: String, required: true}
});

const user = mongoose.model("user", userSchema);

module.exports = { 
    user
};

