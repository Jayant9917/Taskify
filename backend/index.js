const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("hello bitch")
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);;
})