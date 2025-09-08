import { useEffect, useState } from "react"
import { getCounts } from "../services/candidateRequest"


const CandidateCard = ({data}) => {
console.log(data)
    
 
    return (
        <div className=" flex  border bg-[#2e2e2e]  hover:bg-[#3a3a3a] border-[#2a2a2a] w-44  flex-col m-4 py-3 items-center rounded-xl cursor-pointer">
            <div className=" w-36 min-h-32 border-white border rounded-xl flex justify-center items-center">Image</div>
            <div className="flex flex-col m-1 ">
                    <div>Name:  {data.name}</div>
                    <div>Party: {data.party}</div>
                    <div>Votes: {data.votes}</div>
                    <div>More Info</div>
                    <div className=" text-center self-center mt-2 p-1 w-3/4  rounded-xl bg-amber-500 text-black font-semibold " > Vote</div>
               
            </div>
        </div>
    )
}

export default CandidateCard