import Navbar from "../components/Navbar"
import LeaderBoard from "../components/LeaderBoard"
import { useEffect, useRef, useState } from "react"
import { getCounts } from "../services/candidateRequest"
import Dashboard from "../components/Dashboard"

const Admin = () => {
  const [count, setCount] = useState([])
  const [showInput,setInputForm] =useState(false)
  const [candidateData, setCandidateData] = useState("No Candidate Selected")
  const name = useRef()
  const age = useRef()
  const party = useRef()
  useEffect(() => {
    const getRequest = async () => {

      const response = await getCounts()
      setCount(response)

    }
    getRequest()
  }, [])


  const handleUpdate = () => {

  }
  const deleteCan = () => {

  }

  return (
    <>
      <Navbar />
      <div className="flex   w-2/3 min-w-[750px]">

        <div className='flex px-5 flex-col  w-2/3 bg-[#2e2e2e] m-4 p-2 rounded-xl'>
          {/* operations */}
          <div className="flex flex-wrap ">
            <div onClick={()=>setInputForm(true)} className=" mr-4 my-1 px-4  border py-1 rounded-lg text-amber-300  hover:text-green-400  cursor-pointer">Add a Candidate</div>
            <div onClick={handleUpdate} className="mx-4 my-1   px-4 border py-1 rounded-lg text-amber-300  hover:text-blue-400 cursor-pointer">Update</div>
            <div onClick={deleteCan} className="mx-4 my-1 border  py-1 px-4 rounded-lg text-amber-300  hover:text-red-400 cursor-pointer">Delete</div>

          </div>
          {/* Add details */}
           {showInput ?<div>
            <div className="mt-6">
              <div className='flex my-2 justify-between  w-4/4 items-center'>
                <span className='text-xl text-amber-300'>Name</span>
                <input ref={name} type='text' placeholder='Enter your Name' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
              </div>

              <div className='flex my-2 justify-between  w-4/4 items-center'>
                <span className='text-xl text-amber-300'>Age</span>
                <input ref={age} type='text' placeholder='Enter your Age' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
              </div>

              <div className='flex my-2 justify-between  w-4/4 items-center'>
                <span className='text-xl text-amber-300'>Party</span>
                <input ref={party} type='text' placeholder='Enter your party name' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
              </div>
              <div className=" text-center self-center my-6 p-1 w-4/4 cursor-pointer rounded-lg bg-amber-500 hover:bg-amber-300 text-black font-semibold " > Save </div>

            </div>

          </div> :<div className="h-56 flex items-center justify-center">No Candidate Selected</div>}
        </div>
        <LeaderBoard data={count} onlyName={true} title={"All Candidates"} />
      </div>
    </>)
}

export default Admin