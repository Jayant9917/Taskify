const { Router } = require("express");
const { usermiddleware } = require("../middleware/user");
const { todoValid } = require("../middleware/validation");
const Todo = require("../database/models/Todo");
const router = Router();


router.post("/", usermiddleware, async (req, res) => {
    try{
        const todoData = todoValid.parse(req.body);
        const todo = new Todo({
            ...todoData,
            userId: req.user.userId
        });
        await todo.save();
        res.status(201).json(todo);
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.put("/:id", usermiddleware, async (req, res) => {
    try{
        const todoData = todoSchema.parse(req.body);
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            todoData,
            { new: true }
        );
        
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        res.json(todo);
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.delete("/:id", usermiddleware, async (req, res) => {
    try{
        const todo = await Todo.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.userId
        });
        
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        res.json({ message: 'Todo deleted successfully' });
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.get("/", usermiddleware, async (req, res) => {
    try{
        const todos = await Todo.find({ userId: req.user.userId });
        res.json(todos);
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

router.get("/:id", usermiddleware, async (req, res) => {
    try{
        const todo = await Todo.findOne({
            _id: req.params.id,
            userId: req.user.userId
        });
        
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        
        res.json(todo);
    }catch(error){
        res.status(400).json({
            msg : error.message
        });
    }
});

module.exports = {
    router
}