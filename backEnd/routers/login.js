const express = require("express");
const router = express.Router();
const conection = require("../../frontend/dbConnection/db");
const createToken = require("../verificationJwt/createToken");
const verifyToken = require("../verificationJwt/verifyToken");


router.post('/login', (req, res) => {
    const { email, password } = req.body;     
    if (email && password) {
        conection.query(`select * from user where email='${email}';`, (err, data) => {
            
            if (data[0]) {
                if (data[0].password == password) {
                    var token = createToken.createToken(JSON.stringify(data[0]));
                    res.send({result:"login successfully",token});
                }
                else {
                    res.status(401).send("Invalid password");
                }
            }
            else {
                res.status(404).send("email is not exist");
            }
        })
    }
    else {
        res.status(400).send("Email and password are required");
    }
});

router.get('/', (req, res) =>{
    res.status(200).send("Welcome to homepage.")
})

module.exports = router;