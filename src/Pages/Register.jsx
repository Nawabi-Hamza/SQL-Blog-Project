import React from 'react'
import { Button, TextField } from "@mui/material"
// import axios from "axios"
import { useState } from "react"; 
import "../Style.scss"
import axios from "axios"
import { Link } from 'react-router-dom';
export default function Register() {
  // const [ name,setName ] = useState()
  // const [ email,setEmail ] = useState()
  // const [ password,setPassword ] = useState()
  // console.log(name)
  // console.log(email)
  // console.log(password)
  const [ inputs,setInputs ] = useState({
    username:"",email:"",password:""
  })
  const handlChange = (e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = async(e)=>{
      e.preventDefault();
      // alert("submit ed") 
      try{
        await axios.post("http://localhost:4000/auth/register",inputs)
      }catch(error){
        alert(error)
      }

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
      <form style={{padding:"12px"}}>
        <TextField style={MyStyle} variant="standard" name="username" placeholder="username" onChange={handlChange} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="email" placeholder="user email" onChange={handlChange} required></TextField><br/>
        <TextField style={MyStyle} variant="standard" name="password" placeholder="password" onChange={handlChange} required></TextField><br/>
        <Button style={MyStyle} color="error" variant="contained" type="submit" onClick={handleSubmit} required>Register</Button><br/>
        <span>Do have An Account? <Link to="/login">Login</Link></span>
        </form>
      </center>
    </div>
  )
}
