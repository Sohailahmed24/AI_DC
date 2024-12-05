
const mongoose=require("mongoose")


const chillerHMISchema= new mongoose.Schema({
    symptom: String,
  cause: String,
  solution: String,
  alarmCode: String,
  notes: String,
  resetOptions: {
    localHMI: Boolean,
    network: Boolean,
    auto: Boolean
  },
})


module.exports=mongoose.model("ChillerHMI",chillerHMISchema)