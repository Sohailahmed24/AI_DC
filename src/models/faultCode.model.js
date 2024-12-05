

const mongoose=require("mongoose")


const faultCodeSchema= new mongoose.Schema({
    code: { type: Number, required: true },
    index: { type: Number },
    level: { type: String },
    device: { type: String },
    description: { type: String },
})


module.exports=mongoose.model("FaultCode",faultCodeSchema)