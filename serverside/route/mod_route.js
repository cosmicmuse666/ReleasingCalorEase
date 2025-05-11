const exp = require('express');
const router = exp.Router();
const controller_= require('../controller/controller.js');
const dbschema = require("../model/dbschema.js")

router.get('/count', (req, res) => {
    controller_.display(res);
})

router.post("/insert1", async(req,res)=>{
    
        console.log("Form data is successfully received",req.body);
        
      
        
        var image = req.files.image;
        console.log(image.name);
        
       
        await image.mv("./assets/uploads/" + image.name);
        
        
        var insobj = {
            pname: req.body.pname,
            phone: req.body.phone,
            meal: req.body.meal,
            focus: req.body.focus,
            image: image.name,
            time:req.body.time
        };
        
    
        await dbschema.create(insobj);
        
        res.json({
            msg: "response after inserting obj in dbschema!", 
            data: insobj
        });
    
})

module.exports = router;