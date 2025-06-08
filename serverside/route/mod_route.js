const exp = require('express');
const router = exp.Router();
const controller_= require('../controller/controller.js');
const dbschema = require("../model/dbschema.js")
const fs = require("fs")

router.get("/test", async(req,res)=>{
    res.json("testing its working!")
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

router.get('/select', async(req,res)=>{
            
          var data =  await dbschema.find()
          res.json(data);

        
        
})

router.post('/del', async(req,res)=>{
    var id= req.body.del_id;
    var row = await dbschema.findById(id);
    fs.unlinkSync("./assets/uploads/"+row.image)
    await dbschema.findByIdAndDelete(id);
    res.json("deleted")
})

router.post('/update', async(req,res)=>{
     var id= req.body.uid;
     var dbid= await dbschema.findById(id);
     res.json(dbid);
     console.log(dbid);
})

module.exports = router;