import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { loginRequest,postData } from '../services/candidateRequest'

const Login = () => {

  const [login, setLogin] = useState(false)

  const name = useRef(null)
  const age = useRef(null)
  const mobile = useRef(null)
  const address = useRef(null)
  const aadharCard = useRef(null)
  const password = useRef(null)

  // signup
  const handleSignup = async () => {
    const data = {
      "name": name.current.value,
      "age": age.current.value,
      "mobile": mobile.current.value,
      "address": address.current.value,
      "aadharCardNumber": aadharCard.current.value,
      "password": password.current.value

    }
    console.log("sign up success")
    console.log(data)

    // send data to backend
    const response = await loginRequest(data)
    console.log(response)

  }

  // login
  const handleLogin = async () => {

    const login = {
      "aadharCardNumber": aadharCard.current.value,
      "password": password.current.value
    };
    console.log(login)
    const response = await postData(login)
    console.log(response)
  }
  return (
    <div>
      <Navbar />
      <div className='flex justify-center m-4'>


        <div className="w-3/3 max-w-[500px]  m-4 p-4 bg-[#2e2e2e] rounded-xl " >
          <p className="text-4xl text-amber-300 mb-4 text-center ">{login ? "Login" : "Signup"} </p>
          {/* <hr className="mb-4 border text-center text-amber-300 w-20" /> */}
          <div className='flex  justify-center mx-4 flex-col'>


            {!login &&
              <> <div className='flex my-2 justify-between  w-4/4 items-center'>
                <span className='text-xl text-amber-300'>Name</span>
                <input ref={name} type='text' placeholder='Enter your Name' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
              </div>

                <div className='flex my-2 justify-between  w-4/4 items-center'>
                  <span className='text-xl text-amber-300'>Age</span>
                  <input ref={age} type='text' placeholder='Enter your Age' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
                </div>

                <div className='flex my-2 justify-between  w-4/4 items-center'>
                  <span className='text-xl text-amber-300'>Mobile</span>
                  <input ref={mobile} type='text' placeholder='Enter your Mobile number (Optional)' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
                </div>

                <div className='flex my-2 justify-between  w-4/4 items-center'>
                  <span className='text-xl text-amber-300'>Address</span>
                  <input ref={address} type='text' placeholder='Enter your Address' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
                </div>
              </>}
            <div className='flex my-2 justify-between  w-4/4 items-center'>
              <span className='text-xl text-amber-300'>Aadhar Card</span>
              <input ref={aadharCard} type='text' maxLength={12} placeholder='Enter your unique Aadhar number' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
            </div>

            <div className='flex my-2 justify-between  w-4/4 items-center'>
              <span className='text-xl text-amber-300'>Password</span>
              <input ref={password} type='password' placeholder='Enter your Password' className='w-72 bg-[#242424] border h-9 border-amber-300 rounded-lg  hover:bg-[#3a3a3a] px-2' ></input>
            </div>

            <div onClick={login ? handleLogin : handleSignup} className=" text-center self-center mt-6 p-1 w-4/4 cursor-pointer rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold " > Submit</div>
            <div onClick={() => setLogin(!login)} className=" text-center self-center p-1 w-4/4 hover:text-amber-300 rounded-lg cursor-pointer font-semibold " >
              {login ? "New User ? SignUp " : "Already a user? Login Now"}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login