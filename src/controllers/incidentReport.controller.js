const chillerHMIModel = require("../models/chillerHMI.model")
const ChillerDesignPoint = require("../models/designPoint.model")
const FaultCode = require("../models/faultCode.model")
const incidentReportModel = require("../models/incidentReport.model")
const SetPoint = require("../models/setPoint.models")
const { analyzeDatabase } = require("../utils/analyzeDatabase")
const { generateAIReport } = require("../utils/generateAIReport")




const incidentController=async(req,res)=>{
   
    const faultCode= await FaultCode.findOne({code:req.body.alarmCode})
    const hmiData=await chillerHMIModel.findOne({hmiCode:req.body.hmiCode})
    const setPoint= await SetPoint.find({})
    const designPoint=await ChillerDesignPoint.find({})
  
      console.log(faultCode)
      console.log(hmiData,req.body.hmiCode)
      console.log(setPoint,"obj")
    //  const faultCode_id=faultCode.map(code=>code._id)
    //  const hmi_id=hmi.map(hmi=>hmi._id)
    const setP=setPoint.map(sp=>console.log(sp))
    console.log(setP)
    console.log(setPoint[0].pressure,)
      const setPoint_id=setPoint.map(point=>point._id)
      const designPoint_id=designPoint.map(point=>point._id)
      console.log(setPoint_id)
      
      const aggregateData={
        faultCode:faultCode || {description:"No fault code data available"},
        hmiData:hmiData || {symptom:"No HMI data available"},
        setPoint: setPoint[0],
        designPoint: designPoint[0],
      }
    


    const internalAnalysis= await analyzeDatabase(aggregateData)
 
    console.log(internalAnalysis)

    const AI_analysis= await generateAIReport(
        req.body.alarmCode,
        faultCode.description,
        internalAnalysis
    )

    console.log(AI_analysis)

    const incidentReport= new incidentReportModel({
        designPoint:designPoint_id,
        setPoint:setPoint_id,
     //   hmiData:hmiData._id || null,
        faultCode:faultCode._id || null,
        site:req.body.site,
        alarmCode:req.body.alarmCode,

        description:faultCode.description,
          resolved:req.body.resolved,
          AI_analysis:AI_analysis
    })
  

  



 /*      const incidentReport= new incidentReportModel({
        designPoint:designPoint_id,
       // faultCode:faultCode_id,
        hmiData:hmi_id,
        setPoint:setPoint_id,
        site:req.body.site,
        alarmCode:req.body.alarmCode,
        description:req.body.description,
        resolved:req.body.resolved,

      }) */
        // Regenerate AI Analysis
/*     const AI_analysis = await GenerateAIReport(
        req.body.alarmCode,
        req.body.description
      ); */
  
      // Update Incident Report
  //    incident.AI_analysis = AI_analysis;
      
    try {
       // await incident.save();
      //  res.send(incidentReport)
          res.send(incidentReport)
    } catch (error) {
        res.status(401).send("Something went wrong")
    }

}

module.exports={incidentController}