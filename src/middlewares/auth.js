

const adminAuth=(req,res,next)=>{
   // const token=req.body?.token
    const token="xyz"
    const isAuthorized=token==="xyz"
    if(!isAuthorized){
        res.status(501).send("Unauthorized request")
    }else{
        next()
    }
}

const userAuth=(req,res,next)=>{
    const token="xyzx"
    const isAuthorized=token==="xyz"
    if(!isAuthorized){
        res.status(501).send("Unauthorized request")
    }else{
        next()
    }
}

module.exports={
    adminAuth,
    userAuth
}