const { CallAI } = require("./callAI")




const analyzeDatabase=async(data)=>{
/* const {faultCode,hmiData,setPoint,designPoint}=data
const {coolingCapacity,refrigerantType,compressorType,designTemperature,designFlowRate,
    compressorMotorSpeed,minimumNumberCompressor} =designPoint
const {temperature,pressure,flowRate}=setPoint    
const {symptom,cause,solution}=hmiData
const {description}=faultCode */

const { faultCode = {}, hmiData = {}, setPoint = {}, designPoint = {} } = data;
const {
  coolingCapacity = "N/A",
  refrigerantType = "N/A",
  compressorType = "N/A",
  designTemperature = "N/A",
  designFlowRate = "N/A",
  compressorMotorSpeed = "N/A",
  minimumNumberCompressor = "N/A",
} = designPoint;
const { temperature = "N/A", pressure = "N/A", flowRate = "N/A" } = setPoint;
const { symptom = "N/A", cause = "N/A", solution = "N/A" } = hmiData;
const { description = "N/A" } = faultCode;

const prompt=`
Analyze the following data and provide insights:

### Fault Code:
Description:${description || "No data available"}

### HMI Data:

Symptom:${symptom || "No data available"}
Cause:${cause || "No data available"}
Solution:${solution || "No data available"}

### Set Points:

Temperature:${temperature }
Pressure:${pressure}
FlowRate:${flowRate}

### Design Points:
 coolingCapacity: ${coolingCapacity},
  refrigerantType: ${refrigerantType},
  compressorType: ${compressorType},
  designTemperature: ${designTemperature},
  designFlowRate: ${designFlowRate},
  compressorMotorSpeed: ${compressorMotorSpeed},
  minimumNumberCompressor: ${minimumNumberCompressor},

 Provide correlations, root causes, and trends.
`;

const analysis= await CallAI(prompt)
return analysis
}


module.exports={analyzeDatabase}