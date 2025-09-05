
const mongoose  = require("mongoose");
// const bcrypt = require("bcrypt")

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    Votes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                reuired:true,
            },
            
            votedAt:{
                type:Date,
                default:Date.now()

            }
            
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }
})


// create a User model

const Candidate = mongoose.model('Candidate',candidateSchema);

module.exports = Candidate;