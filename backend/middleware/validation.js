const { z } = require("zod");

const userValid = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6)
});

const todovalid = z.object({
    title: z.string().min(1).max(30),
    description: z.string().min(1).max(50),
    completed: z.boolean().optional()
});

module.exports = {
    userValid,
    todovalid
};
