const express = require("express");

const router = express.Router();

const { jwtAuthMiddleware } = require("../jwt");
const User = require("../models/user");
const Candidate = require("../models/candidate");


//votecount
router.get('/counts', async (req,res)=>{

    const candidate = await Candidate.find()
    let arr = []

    for(let i=0;i<candidate.length;i++){
        arr.push({name:candidate[i].name,
            party:candidate[i].party,
            votes:candidate[i].voteCount
        })
    }
    arr.sort((a, b) => b.votes - a.votes)
    console.log(arr)
    res.status(200).json(arr)
})


// vote a candidate

router.post("/:candidateID", jwtAuthMiddleware, async (req, res) => {
    


    try{

        const userData = req.user;
        console.log("User Data: ", userData);
        
        const userId = userData.id;
        const user = await User.findById(userId);
        
        // only can vote one time
        if(user.isVoted){
           return res.status(200).json({"message":"Voter has already voted"})
        }
        // admin cannot vote
        if(user.role=="admin"){
             return res.status(200).json({"message":"Admin cannot vote"})
        }
        const candidateID = req.params.candidateID;
        
         if(!candidateID){
            return res.status(404).json({ message: 'Candidate not found' });
        }
        
        const data ={user:userId}
        const candidate =await Candidate.findById(candidateID)
        candidate.votes.push(data)
        candidate.voteCount++
        
        await candidate.save();
        // making sure candidate can vote only one time
        user.isVoted  =true
         await user.save()

        res.status(200).json({"message":"success"})
    }
   catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }


});

module.exports = router;
