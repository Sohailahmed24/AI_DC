const designPointModel = require("../models/designPoint.model")




const designPointController=async(req,res)=>{

    const point=new designPointModel(req.body)
    
    try {
        await point.save()
        res.send("Design point save in data base")
    } catch (error) {
         res.status(400).send("Something went wrong")
    }
}

module.exports={designPointController}


