
const mongoose  = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    aadharCardNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["voter","admin"],
        default:"voter"
    },
    isVoted:{
        type:Boolean,
        default:false
    }

})
// Hashing
UserSchema.pre('save',async function (next){
    const user  = this;

    // hash the password only if it is modified or is new
    if(!user.isModified('password')) return next();
    
    try{
        // hash password generate
        const salt = await bcrypt.genSalt(10);

        // hashpassword
        const hashpassword = await bcrypt.hash(user.password,salt)
        user.password = hashpassword
        
        next()
    }
    catch(err){
        return next(err);
    }
})

// creating a compare function
UserSchema.methods.comparePassword = async function (candidatePassword) {
    try{
        // console.log("check",this.password)
        
        const isMatch  = await bcrypt.compare(candidatePassword, this.password);
        // console.log(candidatePassword,isMatch)
        return isMatch;
    }   
    catch(err){
        throw err;
    } 
}


// create a User model

const User = mongoose.model('User',UserSchema);

module.exports = User;