const { default: mongoose } = require("mongoose");
const mdb = require("mongoose");

const dbschema =  mdb.Schema(
    {
        name: String,
        Phone: Number,
        meal:String,
        focus:String
    }
)

module.exports = mdb.model('calories', dbschema)