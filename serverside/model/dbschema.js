const { default: mongoose } = require("mongoose");
const mdb = require("mongoose");

const dbschema =  mdb.Schema(
    {
        pname: String,
        phone: Number,
        meal:String,
        focus:String,
        image:String
    }
)

module.exports = mdb.model('calories', dbschema)