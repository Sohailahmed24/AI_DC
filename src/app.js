const express=require("express")
const {connectDB}=require("./config/db.js")
const dotenv=require("dotenv")

dotenv.config()
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))




connectDB().then(()=>{
    console.log("DB connection successfully uploaded in server ")
    
app.listen(7779,()=>{
    console.log("server is start successfully at port:7779")
})

}).catch((error)=>{
    console.log("DB not connected")
})






const faultCodeRoutes =require("./routes/faultCode.routes.js")

app.use("/",faultCodeRoutes)


module.exports={app}






/* 
connectDB().then(()=>{
    console.log("DB connection successfully ")
}).catch((err)=>{
    console.log("DB not connected")
})

app.get("/",(req,res)=>{
    res.send("home page only ")
})

app.get("/test",(req,res)=>{
    res.send("Test page")
})
app.get("/test/2",(req,res)=>{
   res.send("test  and id")
})
app.post("/user/1",(req,res)=>{
    console.log("post data1")
    res.send("post data1 is sended")
})

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    console.log("post data")
    res.send("post data is sended")
})
app.get(/a/,(req,res)=>{
    res.send({
        name:"msa"
    })
})

app.get("/route1",(req,res,next)=>{
    console.log("first route")
    next()
 //   res.send("First route request")
   
},(req,res,next)=>{
 console.log("second route")
   // res.send("second response")
     next()
   
},(req,res,next)=>{
    console.log("3rd response")
   //  res.send("3rd routing")
     next()
})
app.get("/route1",(req,res)=>{
    console.log("next same route")
    res.send("next route handler")
})

app.listen(7778,()=>{
    console.log("server is start successfully at port:7778")
}) */