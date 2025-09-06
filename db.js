const mongoose  = require("mongoose");
require("dotenv").config()

// define mongoDB connection URL
const mongoUrl = "mongodb://0.0.0.0:27017/voting"
// const mongoUrl = process.env.DB_URL

// set up mongo Db connection

mongoose.connect(mongoUrl,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

// maintain connection
const db =mongoose.connection;

// Event Listener
db.on('connected',()=>{
    console.log("Connected to MOngoDb Server")

})
db.on('disconnected',()=>{
    console.log("Disconnected from MOngoDb Server")

})
db.on('error',(e)=>{
    console.log("Error Found",e)

})

// export the database
module.exports =db;