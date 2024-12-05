
const mongoose=require("mongoose")

const connectDB=async()=>{
   await mongoose.connect("mongodb://msa:sohail@cluster0-shard-00-00.wgzjf.mongodb.net:27017,cluster0-shard-00-01.wgzjf.mongodb.net:27017,cluster0-shard-00-02.wgzjf.mongodb.net:27017/?replicaSet=atlas-c2t90j-shard-0&ssl=true&authSource=admin")
}


module.exports={
    connectDB
}