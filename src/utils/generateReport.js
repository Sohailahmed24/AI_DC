const { GenerateAIReport } = require("./generateAIReport")




const GenerateReport=async(alarmCode,description)=>{
      const prompt= await GenerateAIReport(alarmCode,description)
} 

module.exports={GenerateReport}