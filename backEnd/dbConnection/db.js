const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (!err) {
        console.log("Connected with db.");
    } else {
        console.log(err);
    }
});

module.exports = connection;
