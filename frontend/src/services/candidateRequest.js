import axios from "axios";
import { useEffect, useState } from 'react'



  // GET request :All votes data
  export const getCounts = async () => {
    // const url= 
    // console.log(url)
    const result = await fetch(`${import.meta.env.VITE_BASE_URL}/vote/counts`);
    const json = await result.json();

    console.log(json)

    // setData(json);
    return json
  };

  // get all candidate data:GET
  export const getCandidate = async ()=>{
    const result = await fetch( `${import.meta.env.VITE_BASE_URL}/candidate`)
    const json = await result.json()
    return  json
  }

  // signup

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

  // !Login
  // POST Request + DATA(payload)
  let credentials11 = {
    aadharCardNumber: 123456785012,
    password: "12345",
  };
  export const postData = async (data) => {
    const data1 = await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const reslt1 = await data1.json();
    console.log(reslt1);
    return reslt1
  };

  // POST  request +DATA + JWT token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmM3NGQ2MjIzYTZjMjQyMjhlYzYxZiIsImlhdCI6MTc1NzI3Nzg0OX0.bKcmJo7NIvqLalJH71KplVuCA-1TbU0pVL11CqQiFQI";
  const payload = {
    name: "Akhilesh Yadav",
    party: "RJD",
    age: 66,
  };

  // central function to be used multiple time
  const axiosClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // add a candidate

  const addCandidate = async (payload) => {
    const response = await axiosClient.post(`/candidate`, payload);
    console.log(response.data);
    return response.data;
  };

  // return (<div onClick= {()=>addCandidate(payload)}> Add Candidate</div>)

// };

// export default candidateRequest;

// export {getCounts}