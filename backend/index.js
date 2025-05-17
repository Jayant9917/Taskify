const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGO_URI, PORT } = require("./config");


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hii  there..........")
});

async function main(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Database is connected");
    }catch(error){
        console.error("Database connection Failed : ", error);
        process.exit(1);
    }
}
main();

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});
