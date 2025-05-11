const exp = require('express');
const router = exp.Router();
const controller_= require('../controller/controller.js');
const dbschema = require("../model/dbschema.js")

router.get('/count', (req, res) => {
    controller_.display(res);
})

router.post("/insert1", async(req,res)=>{
    try {
        console.log("Form data is successfully received",req.body);
        
      
        
        var image = req.files.image;
        console.log(image.name);
        
       
        await image.mv("./assets/uploads/" + image.name);
        
        
        var insobj = {
            pname: req.body.pname,
            phone: req.body.phone,
            meal: req.body.meal,
            focus: req.body.focus,
            image: image.name 
        };
        
    
        await dbschema.create(insobj);
        
        res.json({
            msg: "response after inserting obj in dbschema!", 
            data: insobj
        });
    } catch (error) {
        console.error("Error in insert1 route:", error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;