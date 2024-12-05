const mongoose=require("mongoose")


const setPointSchema=new mongoose.Schema({
    temperature: String,
    pressure: String,
    flowRate: String,
})

module.exports=mongoose.model("SetPoint",setPointSchema)


