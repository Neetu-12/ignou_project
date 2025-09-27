const mysql = require("mysql");
const conection = mysql.createConnection({
    host: process.env.host,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

conection.connect((err) => {
    if (!err) {
        console.log("Connected with db.")
    }
    else {
        console.log(err);
    }
});

module.exports = conection;