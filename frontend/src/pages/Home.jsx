
import { useEffect, useState } from 'react'
import CandidateCard from '../components/CandidateCard'
import Navbar from '../components/Navbar'
import { getCounts } from '../services/candidateRequest'
import LeaderBoard from '../components/LeaderBoard'


const Home = () => {
  const [count,setCount] =useState([])

    useEffect(()=>{
        const getRequest = async ()=>{

            const response = await  getCounts()
            console.log(response)
            setCount(response)
        }
        getRequest()
    },[])


  return (
    <div >
      <Navbar />
      <div className='flex'>
        {/* All candidate Details */}
        <div className='flex px-5 flex-wrap w-2/3 border'>
          {count.map((item,index)=><CandidateCard data ={item} key={index}/>)}
        </div>
        <LeaderBoard />
      </div>
      
    </div>
  )
}

export default Home