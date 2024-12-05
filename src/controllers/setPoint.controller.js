const setPointModels = require("../models/setPoint.models")



const setPointController=async(req,res)=>{
    const setpoint=new setPointModels(req.body)
     try {
      await  setpoint.save()
      res.send("setpoint data saving successfully ")
     } catch (error) {
        res.status(400).send("Something went wrong")
     }
}


module.exports={setPointController}