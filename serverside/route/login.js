const exp = require("express");
const router = exp.Router();
const logindb = require("../model/logindb.js");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(req.body.pwd, salt);


    
    var obj = {
        // username: req.body.username,
        mail: req.body.mail,
        pwd: hash
    }
    await logindb.create(obj)
})
module.exports = router;
