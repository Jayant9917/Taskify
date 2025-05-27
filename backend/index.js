require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hii there")
});

async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is connected"); 
    }catch(error){
        console.error("Database connection failed", error);
    }
}
main()

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});