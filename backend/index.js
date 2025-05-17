require('dotenv').config();
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const { userRouter } = require('./routes/todo');
const { todoRouter } = require('./routes/user');


app.get("/healthy", (req, res) => {
    res.status(200).send("hello bitch")
});


async function main(){
    await mongoose.connect('process.env.MongoDB_URI');
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
}
main();
