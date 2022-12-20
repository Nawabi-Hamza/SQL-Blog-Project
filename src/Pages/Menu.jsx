import React from 'react'
// import posts from "../Home/data"
import "../Style.scss"
import { useState,useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import {AuthContext} from "../context/AuthContext"
export default function Menu({cat}) {
    const [ hide,show ] = useState({display:"none"})

    const {currentUser} = useContext(AuthContext)
    const [ posts,setPosts ] = useState([])
    useEffect(() => {
      const fetchData = async()=>{
        try{
            const res = await axios.get(`http://localhost:4000/posts/?cat=${cat}`)
            setPosts(res.data)
        }catch(error){
          alert(error)
        }
      }

      fetchData()
    }, [cat])
    // console.log(hide)
    const handleShow=()=>{
        show({display:"inline-block"})
    }
  return (
    <div className="menue ">
        <div className="posts bgcolor">
            <div className="row bg-light">
            <center>
            <h4 className="like">Related Post You May Like To Read</h4>
            </center>
                {posts.map((item)=>(
            <div className="row post my-2">
                <div className="col-5 img">
                    <img src={item.img} alt={item.title}  />
                </div>
                {/* <hr className="display-none-md"/> */}
                <div className="col-7 content fatherbtn">
                   <Link to={`/post/${item.id}`} id="link">
                    {/* <h2>{currentUser.name}</h2> */}
                    {item.title}
                    </Link>
                    {/* <span>{item.description}</span> */}
                    <Link to={`/post/${item.id}`}>
                    <button className="btn btn-dark mb-3" onClick={handleShow}>Read More</button>
                    </Link>
                </div>
            </div>
                ))}
            </div>
        </div>
    </div>
  )
}
