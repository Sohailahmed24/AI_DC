const express=require("express")
const faultCode=require("../models/faultCode.model")
const { faultCodeController } = require("../controllers/faultCode.controller")
const { setPointController } = require("../controllers/setPoint.controller")
const { designPointController } = require("../controllers/designPoint.controller")
const { chillerHMIController } = require("../controllers/chillerHMI.controller")
const { incidentController } = require("../controllers/incidentReport.controller")




const faultCodeRouter=express.Router()
/* faultCodeRouter.post("/faultCode",async(req,res)=>{
   // const code= new faultCode(req.body)
   console.log("calling")
try {
 // await code.save()
  res.send("faultCode data save successfully")
} catch (error) {
   res.status(400).send("Something went wrong")
}

}) */
 faultCodeRouter.post("/faultCode",faultCodeController)
 faultCodeRouter.post("/setpoint",setPointController)
 faultCodeRouter.post("/designPoint",designPointController)
 faultCodeRouter.post("/HMI",chillerHMIController)
 faultCodeRouter.post("/incidentReport",incidentController)
module.exports=faultCodeRouter  