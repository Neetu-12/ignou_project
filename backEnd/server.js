require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./dbConnection/db");
const cors = require("cors")

// middleware
app.use(cors());
app.use(express.json());


app.use("/registration", require("./routers/register"));
app.use("/user", require('./routers/login'));
app.use("/upload", require('./routers/uploadBook'));

app.get('./', (req, res) => {
    res.send("Welcome to server page.")
});

app.listen(4000, () => {
    console.log("Running at port 4000");
});


