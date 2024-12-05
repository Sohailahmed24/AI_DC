
const mongoose=require("mongoose")


const designPointSchema=new mongoose.Schema({
    coolingCapacity: String,
    refrigerantType: String,
    compressorType: String,
    designTemperature: String, // Example in °C
   // designPressure: String, // Example in Bar
    designFlowRate:String,
    compressorMotorSpeed:String,
    minimumNumberCompressor:String

})

module.exports=mongoose.model("ChillerDesignPoint",designPointSchema)