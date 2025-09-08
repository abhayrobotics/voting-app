import axios from "axios";
import { useEffect, useState } from 'react'
const candidateRequest = () => {
  const [data, setData] = useState([]);

  const [credentials, seCredentials] = useState([]);

  
  useEffect(() => {
    getCounts()
    postData()
  }, [])


  // GET request
  const getCounts = async () => {
    const result = await fetch("http://localhost:3000/vote/counts");
    const json = await result.json();

    // console.log(json)

    setData(json);
  };

  // POST Request + DATA(payload)
  let credentials11 = {
    aadharCardNumber: 123456785012,
    password: "12345",
  };
  const postData = async () => {
    const data1 = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials11),
    });

    const reslt1 = await data1.json();
    console.log(reslt1);
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

  return <div><diV onClick= {()=>addCandidate(payload)}> Add Candidate</diV></div>;
};

export default candidateRequest;
