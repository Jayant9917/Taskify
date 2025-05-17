const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const userMiddleware = async (req, res, next) => {
    try{
        const token = req.header.token;
        if(!token){
            return res.status(401).json({
                msg : "Token required"
            });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            msg : error.message
        });
    }
};

module.exports = {
    userMiddleware
}