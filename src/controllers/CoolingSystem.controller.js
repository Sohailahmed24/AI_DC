const coolingSystemModel = require("../models/coolingSystem.model")

   const coolingSystemData={
    circuitType: "Cooling System",
    redundancy: {
      type: "N+1",
      pods: [
        {
          id: "AUX",
          name: "AUX",
          defaultStandbyMode: "Cold",
          chillers: [
            { id: 1, modelNumber: "CH-23F05796-KKKKXX" },
            { id: 2, modelNumber: "CH-23E05795KKKKXX" },
            { id: 3, modelNumber: "CH-23FO5797KKKKXX" }
          ],
          standbyModes: ["Hot", "Cold"]
        },
        {
          id: "POD1",
          name: "Pod1",
          defaultStandbyMode: "Hot",
          chillers: [
            { id: 4, modelNumber: "CH-23EO5799KKKKXX" },
            { id: 5, modelNumber: "CH-23EF05801KKKKXX" },
            { id: 6, modelNumber: "CH-23D05798-KKKKXX" },
            { id: 7, modelNumber: "CH-23FO5802KKKKXX" },
            { id: 8, modelNumber: "CH-23FO5803KKKKXX" }
          ],
          standbyModes: ["Hot", "Cold"]
        },
        {
          id: "POD2",
          name: "Pod2",
          defaultStandbyMode: "Hot",
          chillers: [
            { id: 9, modelNumber: "CH-23F05800-KKKKXX" },
            { id: 10, modelNumber: "CH-23F05804-KKKKXX" },
            { id: 11, modelNumber: "CH-23G05808-KKKKXX" },
            { id: 12, modelNumber: "CH-23F05806-KKKKXX" },
            { id: 13, modelNumber: "CH-23F05805-KKKKXX" }
          ],
          standbyModes: ["Hot", "Cold"]
        },
        {
          id: "POD3",
          name: "Pod3",
          defaultStandbyMode: "Hot",
          chillers: [
            { id: 14, modelNumber: "CH-23G05812-KKKKXX" },
            { id: 15, modelNumber: "CH-23G05811-KKKKXX" },
            { id: 16, modelNumber: "CH-23G05807-KKKKXX" },
            { id: 17, modelNumber: "CH-23G05809-KKKKXX" },
            { id: 18, modelNumber: "CH-23G05810-KKKKXX" }
          ],
          standbyModes: ["Hot", "Cold"]
        },
        {
          id: "POD4",
          name: "Pod4",
          defaultStandbyMode: "Hot",
          chillers: [
            { id: 19, modelNumber: "CH-23DUMMY-KKKKXX" },
            { id: 20, modelNumber: "CH-23DUMMY-KKKKXX" },
            { id: 21, modelNumber: "CH-23DUMMY-KKKKXX" },
            { id: 22, modelNumber: "CH-23DUMMY-KKKKXX" },
            { id: 23, modelNumber: "CH-23DUMMY-KKKKXX" }
          ],
          standbyModes: ["Hot", "Cold"]
        }
      ]
    },
    temperatureMonitoring: {
      sensors: [
        {
          location: "Chillers",
          type: "Supply",
          temperatureSetpoint: 20
        },
        {
          location: "Common Ring Main Sub-Branches",
          type: "Return",
          temperatureSetpoint: 28
        }
      ]
    },
    operationModes: {
      fullLoad: {
        hotStandby: {
          description: "All chillers in each Pod/AUX circuit run in Hot Standby Mode, sharing the load equally at reduced capacity(or All chillers run at reduced load (80% for POD's 67% forAUX). If one fails, remaining chillers load to 100%.).",
          normalLoadPercent: {
            AUX: 67,
            Pod: 80
          },
          failureLoadPercent: 100
        },
        coldStandby: {
          description: "Only N chillers run at 100% load, with standby chillers OFF until required.",
          normalLoadPercent: 100,
          failureResponse: "Standby chiller activates when a duty chiller fails."
        }
      },
      partLoad: {
        description: "Number of running chillers is dictated by required flow rates in each circuit.",
        controlStrategy: "Flow rate-based control"
      }
    },
    failureManagement: {
      chillerFailure: {
        action: "Adjust load on remaining chillers or activate standby chiller.",
        responseTime: "Immediate"
      },
      temperatureDeviation: {
        action: "Activate standby chiller or adjust existing load.",
        threshold: "+/- 2°C from setpoint"
      },
      simultaneousFailures: {
        action: "Optimize remaining capacity and notify operator.",
        threshold: "More than one chiller fails in a Pod/AUX"
      }
    }
  }
const CoolingSystemController=async(req,res)=>{
    
    const coolingSystemResult= new coolingSystemModel(coolingSystemData)
   try {
    
     // await coolingSystemResult.save()
      res.send(coolingSystemResult)
   } catch (error) {
      res.status(401).send(`Something went Wrong${error}`)
   }
}

module.exports={CoolingSystemController}