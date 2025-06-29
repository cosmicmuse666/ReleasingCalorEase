const { default: mongoose } = require("mongoose");
const mdb = require("mongoose");

const authschema =  mdb.Schema(
    {
        mail: String,
        pwd:String,
       
        
    }
)

module.exports = mdb.model('auth', authschema)