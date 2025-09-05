const express = require("express");

const router = express.Router();

const Person = require("../models/Person");
const { jwtAuthMiddleware, generateToken } = require("../jwt");
const User = require("../models/user");

// post method to save data in DB
router.post("/signup", async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data

    // create a new user document using mongoose model
    const newUser = new User(data);

    const response = await newUser.save();
    console.log("person saved");

    // console.log(toke)
    // Uing JWT
    const payload = {
      id: response.id,
    };
    const token = generateToken(response.username);

    console.log(JSON.stringify(payload));
    console.log("token is :", token);

    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login Router
router.post("/login", async (req, res) => {
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
        const user = await Person.findById(userId);

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.put("/:profile/password", async (req, res) => {
  try {
    //1. we need ID
    const userID = req.user;
   

// TODO: pending_____________________________________


    console.log("data updated");
    res.status(200).json(response);
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});
