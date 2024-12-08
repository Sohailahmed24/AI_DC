const mongoose=require("mongoose")


const ChillerSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    modelNumber: { type: String, required: true },
    manufacturer: { type: String, default: "Daikin" } // Default manufacturer is Daikin
  });

  const PodSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    defaultStandbyMode: { 
      type: String, 
      enum: ["Hot", "Cold"], 
      required: true 
    },
    chillers: [ChillerSchema],
    standbyModes: {
      type: [String],
      enum: ["Hot", "Cold"],
      required: true
    }
  });

  const SensorSchema = new mongoose.Schema({
    location: { type: String, required: true },
    type: { type: String, required: true },
    temperatureSetpoint: { type: Number, required: true }
  });
  const HotStandbySchema = new mongoose.Schema({
    description: { type: String, required: true },
    normalLoadPercent: {
      AUX: { type: Number, required: true },
      Pod: { type: Number, required: true }
    },
    failureLoadPercent: { type: Number, required: true }
  });

  const ColdStandbySchema = new mongoose.Schema({
    description: { type: String, required: true },
    normalLoadPercent: { type: Number, required: true },
    failureResponse: { type: String, required: true }
  });

  const FullLoadSchema = new mongoose.Schema({
    hotStandby: HotStandbySchema,
    coldStandby: ColdStandbySchema
  });
  const PartLoadSchema = new mongoose.Schema({
    description: { type: String, required: true },
    controlStrategy: { type: String, required: true }
  });
  
  const FailureManagementSchema = new mongoose.Schema({
    chillerFailure: {
      action: { type: String, required: true },
      responseTime: { type: String, required: true }
    },
    temperatureDeviation: {
      action: { type: String, required: true },
      threshold: { type: String, required: true }
    },
    simultaneousFailures: {
      action: { type: String, required: true },
      threshold: { type: String, required: true }
    }
  });
  
  const CoolingSystemSchema = new mongoose.Schema({
    circuitType: { type: String, required: true },
    redundancy: {
      type: {
        type: String, // e.g., "N+1"
        required: true
      },
      pods: [PodSchema]
    },
    temperatureMonitoring: {
      sensors: [SensorSchema]
    },
    operationModes: {
      fullLoad: FullLoadSchema,
      partLoad: PartLoadSchema
    },
    failureManagement: FailureManagementSchema
  });
  
  module.exports = mongoose.model('CoolingSystem', CoolingSystemSchema);
    