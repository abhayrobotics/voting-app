const express = require("express");

const router = express.Router();


const { jwtAuthMiddleware, generateToken } = require("../jwt");
const User = require("../models/user");

// post method to save data in DB
router.post("/signup",async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data
    console.log(data);

    // create a new user document using mongoose model
    const newUser = new User(data);

    const response = await newUser.save();
    console.log("person saved");

    // console.log(toke)
    // Uing JWT
    const payload = {
      id: response.id,
    };
    const token = generateToken(payload);

    console.log(JSON.stringify(payload));
    console.log("token is :", token);

    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login Router
router.post("/login", jwtAuthMiddleware,async (req, res) => {
  try {
    // extract username and password from request body
    const { aadharCardNumber, password } = req.body;

    // find user by aadharCardNumber
    const user = await User.findOne({ aadharCardNumber: aadharCardNumber });

    // if user doeanot exist or password does notexist return error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "invalid username or password" });
    }

    // generate token
    const payload = {
      id: user.id,
    };

    const token = generateToken(payload);

    // return token as response
    res.json({ token });
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Profile
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try{
        const userData = req.user;
        console.log("User Data: ", userData);

        const userId = userData.id;
        const user = await User.findById(userId);

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.put("/:profile/password",jwtAuthMiddleware, async (req, res) => {
  try {
    //extract the ID
    const userID = req.user;
    // Extract current and new password
    const {currentPassword,newPassword} = req.body
   
    // find the user
    const user = await User.findById(userID);

    // if password does notmatch return error
    if(!(await user.comparePassword(currentPassword))){
      return res.status(401).json({error:"Invalid username or password"})
    }

    // update the password
    user.password = newPassword;
    await user.save()

    console.log("Password updated");

    res.status(200).json({message:"password updated"});
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
