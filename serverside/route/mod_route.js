const exp = require('express');
const router = exp.Router();
const controller_= require('../controller/controller.js');

const dbschema = require("../model/dbschema.js")

router.get('/track', (req, res) => {
    res.send('Tracking');
})

router.get('/count', (req, res) => {
    controller_.display(res);
})

router.post('/insert', (req,res)=>{
    // res.send("This is the submitted form data ")
    // console.log(req);
    var a = {msg: "form submitted"};
    res.json(a);
})

router.post("/insert1", async(req,res)=>{
    console.log(req.body);

    var insobj = {
        name : req.body.name,
        Phone : req.body.phone,
        meal:req.body.meal,
        focus:req.body.focus

    }
    await dbschema.create(insobj);
})


module.exports = router;

