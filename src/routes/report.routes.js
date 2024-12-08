const express=require("express")
const faultCode=require("../models/faultCode.model")
const { faultCodeController } = require("../controllers/faultCode.controller")
const { setPointController } = require("../controllers/setPoint.controller")
const { designPointController } = require("../controllers/designPoint.controller")
const { chillerHMIController } = require("../controllers/chillerHMI.controller")
const { incidentController } = require("../controllers/incidentReport.controller")
const {  ChillerScenarioController } = require("../controllers/ChillerScenario.controller")
const { CoolingSystemController } = require("../controllers/CoolingSystem.controller")




const reportRouter=express.Router()
/* reportRouter.post("/faultCode",async(req,res)=>{
   // const code= new faultCode(req.body)
   console.log("calling")
try {
 // await code.save()
  res.send("faultCode data save successfully")
} catch (error) {
   res.status(400).send("Something went wrong")
}

}) */
 reportRouter.post("/faultCode",faultCodeController)
 reportRouter.post("/setpoint",setPointController)
 reportRouter.post("/designPoint",designPointController)
 reportRouter.post("/HMI",chillerHMIController)
 reportRouter.post("/incidentReport",incidentController)
 reportRouter.post("/ChillerScenario",ChillerScenarioController)
 reportRouter.post("/CoolingSystem",CoolingSystemController)
module.exports=reportRouter  