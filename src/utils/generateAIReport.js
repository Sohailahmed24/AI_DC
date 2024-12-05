const { CallAI } = require("./callAI");



const generateAIReport=async(alarmCode,description,internalAnalysis)=>{
   // const{trends,correlations}=internalAnalysis
    const prompt=`
    Generate detailed report for the following data;

    ### Alarm Details:
    AlarmCode:${alarmCode}
    Description:${description}

    ### AI Analysis:
    Trends:${internalAnalysis?.trends || "No trends identified"}
    Correlations:${internalAnalysis?.correlations || "No correlations identified"}
    ### Recommendations:
          Based on the analysis, suggest actions to resolve the issue.

     ### Predicted Impact:
         Estimate potential impacts if resolved.

           Generate the report in a structured format.
    `;
   
    const report = await CallAI(prompt)
    return report
}


module.exports={generateAIReport}