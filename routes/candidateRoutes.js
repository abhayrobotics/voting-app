const express = require("express");

const router = express.Router();


const { jwtAuthMiddleware, generateToken } = require("../jwt");
const Candidate = require("../models/candidate");
const User = require("../models/user")


const checkAdminRole = async (userID) => {
   try{
        const user = await User.findById(userID);
        if(user.role === 'admin'){
            return true;
        }
   }catch(err){
        return false;
   }
}

// post method to Add candidate data in DB( only admin)
router.post("/",jwtAuthMiddleware, async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data
    console.log("check",data);

    // create a new user document using mongoose model
    const newCandidate = new Candidate(data);

    // verify admin -user
    const userId = req.user.id
    console.log(userId)
    if(  !(await checkAdminRole(userId))){
        return res.status(400).json({"message":"you dont have admin access"})
    }

    const response = await newCandidate.save();
    console.log("person saved");


    res.status(200).json({ response: response});
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});




router.put("/:candidateID", jwtAuthMiddleware,async (req, res) => {
  try {
    console.log(req.user)
     if(!(await checkAdminRole(req.user.id))){
            return res.status(403).json({message:"user does has not admin role"})
        }//1. we need ID
    const candidateID = req.params.candidateID;
    // 2. we need updated data
    const updatedData = req.body;
    console.log(candidateID)

    const response = await Candidate.findByIdAndUpdate(candidateID,updatedData,{
      new:true, //return the updated document
      runValidators:true // run mongoose validation
    })
    console.log(response)
    if(!response){
      console.log("candiadate NOt found" )
    }
    console.log("data updated");
    res.status(200).json(response)
  
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a candidate

router.delete("/:candidateID",jwtAuthMiddleware, async (req, res) => {
  try {
     if(!(await checkAdminRole(req.user.id))){
            return res.status(403).json({message:"user does has not admin role"})
        }//1. we need ID
    const candidateID = req.params.candidateID;
    

    const response = await Candidate.findByIdAndDelete(candidateID,)
    if(!response){
      console.log("candiadate NOt found" )
    }
    console.log("data deleted");
    res.status(200).json(response)
  
  } catch (error) {
    console.log({ error: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
