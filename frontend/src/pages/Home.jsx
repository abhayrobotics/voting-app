
import { useEffect, useState } from 'react'
import CandidateCard from '../components/CandidateCard'
import Navbar from '../components/Navbar'
import { getCandidate, getCounts } from '../services/candidateRequest'
import LeaderBoard from '../components/LeaderBoard'


const Home = () => {
  const [count,setCount] =useState([])
  const [candidate,setCandidate] =useState([])

    useEffect(()=>{
        const getRequest = async ()=>{

            const response = await  getCounts()
            setCount(response)

            const getCandidate2 = await getCandidate()
            setCandidate(getCandidate2)
            console.log(getCandidate2)
        }
        getRequest()
    },[])


  return (
    <div >
      <Navbar />
      <div className='flex'>
        {/* All candidate Details */}
        <div className='flex px-5 flex-wrap w-2/3 bg-[#2e2e2e] m-4 p-2 rounded-xl'>
          {candidate.map((item,index)=><CandidateCard data ={item} key={index}/>)}
        </div>
        <LeaderBoard data={count}/>
      </div>
      
    </div>
  )
}

export default Home