const jwt = require("jsonwebtoken")

const jwtAuthMiddleware = (req,res,next) =>{
    console.log("jwt middleware")
    // Check whether request header has authorization or not
    const authorizarion = req.headers.authorization
    console.log(authorizarion)
    if(!authorizarion) {
        return res.status(401).json({error:"Token not Found"})
    }

    // Extract the JWT token
    const token  = authorizarion.split(' ')[1];
     
    if(!token) return res.status(401).json({error:"Unauthorized"});

    try{
        // vrify the JWT Token
        const decoded = jwt.verify(token,process.env.JWT_secret);

        // Attach user info to the request object
        req.user = decoded

        next()
    }catch(err){
        console.log(error);
        res.status(401).json({error:"Invalid token"})
    }
}

// generate JWT Token
const generateToken = (userData)=>{
    // generae a new JWT toekn using user data
    return jwt.sign(userData,process.env.JWT_secret)
}


module.exports = {jwtAuthMiddleware,generateToken}