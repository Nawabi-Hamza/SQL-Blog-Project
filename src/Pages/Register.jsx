import React from 'react'
import { Button, TextField } from "@mui/material"
// import axios from "axios"
import { useState } from "react"; 
import "../Style.scss"
import { Link } from 'react-router-dom';
export default function Register() {
  const [ name,setName ] = useState()
  const [ email,setEmail ] = useState()
  const [ password,setPassword ] = useState()
  console.log(name)
  console.log(email)
  console.log(password)
  const handleSubmit = async(e)=>{
      e.preventDefault();
      alert("submit ed") 
  }
  const MyStyle = {
      width:"25vw",
      marginTop:"25px",
      height:"60px",
  }
  return (
    <div className='Loginpage'>
      <center>
        <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{padding:"12px"}}>
        <TextField style={MyStyle} variant="standard" name="name" placeholder="username" onChange={(e)=>setName(e.target.value)} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="name" placeholder="user email" onChange={(e)=>setEmail(e.target.value)} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required></TextField><br/>
        <Button style={MyStyle} color="error" variant="contained" type="submit" required>Register</Button><br/>
        <span>Do have An Account? <Link to="/login">Login</Link></span>
        </form>
      </center>
    </div>
  )
}
