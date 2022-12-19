import React from 'react'
import { Button, TextField } from "@mui/material"
// import axios from "axios"
// import  login  from "../context/AuthContext"
// import { useState,useContext } from "react"; 
import { useState,useContext } from "react"
import "../Style.scss"
// import axios from "axios"
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const   { login }  = useContext(AuthContext)
  const navigate = useNavigate()
  const [ inputs,setInput ] = useState({
    name:"",
    password:""
  })
  // take data from inputs
  const handlChange =(e)=>{ 
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(inputs)
  // api database login
  const handleSubmit = async(e)=>{
      e.preventDefault();
     try{
      // await axios.post("http://localhost:4000/auth/login",inputs)
      await login(inputs)
      navigate("/")
      alert("welcome "+inputs.name)

     }catch(error){
      console.log(error)
      alert("Please Check Your Name Or Password")
     }
  }

  //style
  const MyStyle = {
      width:"25vw",
      marginTop:"25px",
      height:"60px",
  }
  return ( 
    <div className='Loginpage'>
      <center>
        <h1 >Login</h1>
      <form  style={{padding:"12px"}}>
        <TextField style={MyStyle} variant="standard" name="name" placeholder="username" onChange={handlChange} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="password" placeholder="password" onChange={handlChange} required></TextField><br/>
        <Button style={MyStyle} color="error" variant="contained" type="submit" required onClick={handleSubmit}>Login</Button><br/>
        <span>Do not have An Account? <Link to="/register">Register</Link></span>
        </form>
      </center>
    </div>
  )
}
