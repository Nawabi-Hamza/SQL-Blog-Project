import React from 'react'
import { Button, TextField } from "@mui/material"
// import axios from "axios"
import { useState } from "react"; 
import "../Style.scss"
import { Link } from 'react-router-dom';
export default function Login() {
  const [ name,setName ] = useState()
  const [ password,setPassword ] = useState()
  console.log(name)
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
        <h1 >Login</h1>
      <form onSubmit={handleSubmit} style={{padding:"12px"}}>
        <TextField style={MyStyle} variant="standard" name="name" placeholder="username" onChange={(e)=>setName(e.target.value)} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required></TextField><br/>
        <Button style={MyStyle} color="error" variant="contained" type="submit" required>Login</Button><br/>
        <span>Do not have An Account? <Link to="/register">Register</Link></span>
        </form>
      </center>
    </div>
  )
}
