const mysql = require("mysql");
const conection = mysql.createConnection({
    host:"localhost",
    password:"Neetu@123",
    user:"root",
    database:"eBookStore"
});

conection.connect((err)=>{
    if(!err){
        console.log("Connected with db.")
    }
    else{
        console.log(err);
    }
});

module.exports = conection;