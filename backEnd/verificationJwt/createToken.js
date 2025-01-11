const jwt = require("jsonwebtoken")

var createToken = (data) => {
    token = jwt.sign(data, "Neetu@#123lmoiweirdmf")
    return token;
}


module.exports = { createToken }
