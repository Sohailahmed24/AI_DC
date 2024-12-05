const mongoose=require("mongoose")


const incidentReportSchema=new mongoose.Schema({
    incidentDate: { type: Date, default: Date.now },
    designPoint: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChillerDesignPoint' }],
    faultCode: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FaultCode' }],
   hmiData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChillerHMI' }],
    setPoint: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SetPoint' }],
  //  designPoint:[String],
  //  faultCode:[String],
  //  hmiData:[String],
  //  setPoint:[String],
    site: { type: String, required: true, trim: true, max: 100 },
    alarmCode: { type: Number, required: true, min: 1, max: 9999 },

    description: String,
  //  actionsTaken: [String],
    resolved: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Closed'],
        default: 'Open',
    },
   // summary: String, // Summary or initial analysis of the incident
    AI_analysis: String ,// AI-generated analysis of the incident
    createdBy: { type: String, required: true },
  //  updatedBy: { type: String },
  //  updatedAt: { type: Date },
})

module.exports=mongoose.model("IncidentReport",incidentReportSchema)