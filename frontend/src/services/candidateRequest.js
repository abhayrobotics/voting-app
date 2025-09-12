import axios from "axios";
import { includes } from "lodash";
import { useEffect, useState } from 'react'



  // TODO: GET request :All votes data
  export const getCounts = async () => {
    // const url= 
    // console.log(url)
    const result = await fetch(`${import.meta.env.VITE_BASE_URL}/vote/counts`);
    const json = await result.json();

    console.log(json)

    // setData(json);
    return json
  };

  // TODO :get all candidate data:GET
  export const getCandidate = async ()=>{
    const result = await fetch( `${import.meta.env.VITE_BASE_URL}/candidate`)
    const json = await result.json()
    console.log(json)
    return  json
  }

  // TODO: signup  :POST request
export   const loginRequest = async (signup) => {
    const data1 = await fetch( `${import.meta.env.VITE_BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    });

    const result = await data1.json();
    console.log(result);
    return result
  };

  // TODO: Login
  // POST Request + DATA(payload)
  let credentials11 = {
    aadharCardNumber: 123456785012,
    password: "12345",
  };
  export const postData = async (data) => {
    const data1 = await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await data1.json();
    console.log({"Token received at ": result.token});
    //  localStorage.setItem("token",result.token)
    return result.token
  };

  
  // POST  request +DATA + JWT token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzNhNThiZTA3ODZjNWU1MmZiNmQ4NSIsImlhdCI6MTc1NzY2MDM3Nn0.Gv_H72Mpcd5zdCnO3_Pe3Lqq0f46_R6Z0A58W5fCJ9U";
  //  const token = req.cookies.token;
    // console.log("check",token)
  //   const payload = {
  //   name: "Akhilesh Yadav",
  //   party: "RJD",
  //   age: 66,
  // };

  // central function to be used multiple time
  

  //TODO: add a candidate

  export const addCandidate = async (payload) => {
    const axiosClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true, 
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
    try{

      const response = await axiosClient.post(`/candidate`, payload);
      console.log(response.data);
      return response.data;
    }
    catch(error){
      console.log(error)
      return {payload}
    }
  };

  