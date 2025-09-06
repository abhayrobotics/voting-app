const express = require("express");

const router = express.Router();


const { jwtAuthMiddleware, generateToken } = require("../jwt");
const Candidate = require("../models/candidate");
const User = require("../models/user")


const checkAdminRole = async (userID) =>{
    try{
       if(!checkAdminRole(req.user.id)){
            return res.status(403).json({message:"user does has not admin role"})
        
        }

        const user  = await User.findById(userID)
        return user.role ==="admin"
    }catch(error){
        return false
    }
}

// post method to save data in DB
router.post("/",async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data
    console.log(data);

    // create a new user document using mongoose model
    const newCandidate = new Candidate(data);

    const response = await newCandidate.save();
    console.log("person saved");


    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});




router.put("/:candidateID", async (req, res) => {
  try {
     if(!checkAdminRole(req.user.id)){
            return res.status(403).json({message:"user does has not admin role"})
        }//1. we need ID
    const candidateID = req.params.candidateID;
    // 2. we need updated data
    const updatedData = req.body;

    const response = await Person.findByIdAndUpdate(candidateID,updatedData,{
      new:true, //return the updated document
      runValidators:true // run mongoose validation
    })
    if(!response){
      console.log("candiadate NOt found" )
    }
    console.log("data updated");
    res.status(200).json(response)
  
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:candidateID", async (req, res) => {
  try {
     if(!checkAdminRole(req.user.id)){
            return res.status(403).json({message:"user does has not admin role"})
        }//1. we need ID
    const candidateID = req.params.candidateID;
    // 2. we need updated data
    const updatedData = req.body;

    const response = await Candidate.findByIdAndDelete(candidateID,)
    if(!response){
      console.log("candiadate NOt found" )
    }
    console.log("data deleted");
    res.status(200).json(response)
  
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
