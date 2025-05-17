const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("./database/models/User");
const { Todo } = require("./database/models/Todo");
const { userValid } = require("../middleware/validation");
const { usermiddleware } = require("../middleware/user");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
    try{
        const { username, password } = userValid.parse(req.body);
        // Existing User
        const existingUser = await User.findOne({ username });
        if(existingUser){
            return res.status(400).json({
                msg : "username already exists"
            });
        }
        //Hash Password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new user({
            username : username,
            password : hashedPassword 
        });
        await user.save(); 
        res.status(201).json({
            msg : "user created successfully"
        });
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.post("/signin", async (req, res) => {
    try{
        const { username, password } = userValid.parse(req.body);
        // user not found
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({
                msg : "Invalid credentials"
            });
        }
        //Compare password with hashed password
        const isValidPass = await bcrypt.compare(password, hashedPassword);
        if(!isValidPass){
            const token = jwt.sign({
                userId : user._id},
            JWT_SECRET, {expiresIn : "24h"});
            res.json({token});
        }else{
            res.status(401).json({
                msg : "Invalid credentials"
            })
        }
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.get("/todos", usermiddleware, async (req, res) => {
    try{
        const todos = await Todo.find({
            userId: req.user.userId
        });
        res.json({
            todos
        });
    }catch(error){
        res.status(401).json({
            msg : error.message
        });
    }
});

router.post("/Logout", usermiddleware, async (req, res) => {
    // Since we're using JWT, we don't need to do anything on the server side
    // The client should remove the token
    res.json({
        msg : "logout out successfully"
    });
});

module.exports = {
    router
};
