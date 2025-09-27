require('dotenv').config();
const express = require("express");
const app = express();
// const db = require("./dbConnection/db");
const cors = require("cors")

// middleware
app.use(cors());
app.use(express.json());


app.use("/registration", require("./routers/register"));
app.use("/user", require('./routers/login'));
app.use("/upload", require('./routers/uploadBook'));

app.get('/home', (req, res) => {
    res.send("Welcome to server page.")
});

app.get('/welcome', (req, res) => {
    res.status(200).json({message:"Welcome to eBook webssite...."})
});

app.listen(3306, () => {
    console.log("Running at port 3306");
});


