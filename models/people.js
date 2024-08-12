const mongoose=require("mongoose")
const peopleSchema=mongoose.Schema(
   {
    fullname:String,
    phoneno:String,
    village:String,
    place:String,
    pincode:String,
    houseno:String,
    missingdate:String,
    aadharno:String,
    gender:String,
    age:String,
   }
)
const peopleModel=mongoose.model("peoples",peopleSchema)
module.exports=peopleModel