// Express js

var express = require("express");


let app = express();
require("dotenv").config()

const bodyParser = require("body-parser");
const db = require("./db")
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Using CORS access
const cors = require("cors")
const corsOptions = {
  origin:"http://localhost:5173/",
  method:"GET, POST, PUT, DELETE, PATCH, HEAD ",
  Credential:true
}
app.use(cors(corsOptions))


// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes')
const voteRoutes = require('./routes/voteRoutes')

const { jwtAuthMiddleware } = require("./jwt");
// const menuItemRoutes = require ('./routes/menuItemRoutes');

// using routes 
app.use("/user",userRoutes);
app.use('/candidate',candidateRoutes);
app.use("/vote",voteRoutes)


app.listen(PORT, () => {
  console.log("Express JS server is running at 3000");
});

app.get("/",(req,res)=>{
  res.send("Welcome to Voting app")
  }
)