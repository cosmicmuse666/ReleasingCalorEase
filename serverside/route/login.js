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


router.post("/loggedin", async (req, res) => {
    var user = await logindb.findOne({ mail: req.body.mail });
    if (user) {
        var usermatch = await bcrypt.compare(req.body.pwd, user.pwd);
        if (usermatch === true) {
            res.json({ status: "success", message: "Login successful" });
        } else {
            res.json({ status: "error", message: "Invalid password" });
        }
    } else {
        res.json({ status: "error", message: "User not found" });
    }
})
module.exports = router;
