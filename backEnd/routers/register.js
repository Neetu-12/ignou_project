const express = require("express");
const router = express.Router();
const conection = require("../dbConnection/db")

router.post('/', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    if (password && email) {
        
        conection.query(`select * from user where email='${email}';`, (err, data) => {
            if (data.length > 0) {
                res.send("exist")
            }
            else {
                conection.query(`insert into user( name, password, email)values ( '${name}', '${password}', '${email}');`, (err, data) => {
                    if (!err) {
                        res.status(200).send("Successfully registered")
                    }
                    else {
                        res.status(404).json({ err: err })
                    }
                });
            }
        });
    }
    else {
        res.    status(404).json({ error:  "Resource not found" });
    }
});

module.exports = router;