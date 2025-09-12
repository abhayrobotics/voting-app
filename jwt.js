const jwt = require("jsonwebtoken")

const jwtAuthMiddleware = (req,res,next) =>{
    console.log("jwt middleware")
    // Check whether request header has authorization or not
    // const authorizarion = req.headers.authorization
    // console.log(authorizarion)
    // if(!authorizarion) {
    //     return res.status(401).json({error:"Token not Found"})
    // }

    // Extract the JWT token
    // const token  = authorizarion.split(' ')[1] || req.cookies.token;
    const token  = req.cookies.token;
     console.log(req)
    if(!token) return res.status(401).json({error:"Unauthorized",token:token});

    try{
        // vrify the JWT Token
        const decoded = jwt.verify(token,process.env.JWT_secret);

        // Attach user info to the request object
        req.user = decoded

        next()
    }catch(error){
        console.log(error);
        res.status(401).json({error:"Invalid token"})
    }
}

// generate JWT Token
const generateToken = (userData)=>{
    // generae a new JWT toekn using user data
    // user data is a jsonformat payload
    return jwt.sign(userData,process.env.JWT_secret)
}


module.exports = {jwtAuthMiddleware,generateToken}