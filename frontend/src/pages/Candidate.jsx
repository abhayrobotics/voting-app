import Navbar from "../components/Navbar"
import LeaderBoard from "../components/LeaderBoard"
import { useEffect, useState } from "react"
import { getCounts } from "../services/candidateRequest"

const Candidate = () => {
  const [count, setCount] = useState([])

  useEffect(() => {
    const getRequest = async () => {

      const response = await getCounts()
      setCount(response)

      const getCandidate2 = await getCandidate()
      setCandidate(getCandidate2)
      console.log(getCandidate2)
    }
    getRequest()
  }, [])
  return (
    <>
      <Navbar />
      <div>
        <LeaderBoard data={count} />
      </div>
    </>)
}

export default Candidate