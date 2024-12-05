


const chillerHMIController=async(req,res)=>{
    console.log("save HMI")
        try {
          res.send("Save HMI")
    } catch (error) {
       res.status(400).send("Something went wrong")  
    } 
}

module.exports={chillerHMIController}