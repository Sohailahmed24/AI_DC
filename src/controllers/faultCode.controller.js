const faultCode=require("../models/faultCode.model")


const faultCodeController=async(req,res)=>{
       const code= new faultCode(req.body)
try {
   
      await code.save()
     res.send("faultCode data save successfully")
} catch (error) {
      res.status(400).send("Something went wrong")
}

}

module.exports={faultCodeController}