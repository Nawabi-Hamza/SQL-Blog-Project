import React from 'react'
import { Button, TextField } from "@mui/material"
// import axios from "axios"
import { useState } from "react"; 
import "../Style.scss"
import axios from "axios"
import { Link,useNavigate } from 'react-router-dom';

const MyStyle = {width:"25vw", marginTop:"25px",height:"60px",}
export default function Register() {
  const navigate = useNavigate()
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:""
  })

  const handlChange = (e)=>{
    setInput((prev)=>({...prev,[e.target.name] : e.target.value}))
  }
  console.log(input)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:4000/auth/register",input)
      alert("Welcome "+input.name)
      navigate("/login")
    }catch(error){
      console.log(error)
      alert("user already exist")
    }


  }

  return (
    <div className='Loginpage' > 
      <center>
        <h1>Register</h1>
      <form style={{padding:"12px" , opacity:"0.9"}}>
        <TextField style={MyStyle} variant="standard" name="name" placeholder="username" onChange={handlChange} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="email" placeholder="user email" onChange={handlChange} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="password" placeholder="password" onChange={handlChange} required></TextField><br/>
        <Button style={MyStyle} color="error" variant="contained" type="submit" onClick={handleSubmit} required>Register</Button><br/>
        <span>Do have An Account? <Link to="/login">Login</Link></span>
        </form>
      </center>
    </div>
  )
}
