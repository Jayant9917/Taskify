const jwt = require("jsonwebtoken"); 
const Router = require("express");
const userrouter = Router();

userrouter.post("/signup", (req, res) => {
    const { email, username, password } = req.body;
});

userrouter.post("/signin", (req,res) => {

});