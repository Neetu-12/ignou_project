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

app.get('/', (req, res) => {
    res.status(200).json({message:"Welcome to eBook webssite...."})
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});
