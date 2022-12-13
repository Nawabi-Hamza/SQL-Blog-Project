import React from 'react'
import posts from "../Home/data"
import "../Style.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Menu() {
    const [ hide,show ] = useState({display:"none"})
    
    const handleShow=()=>{
        show({display:"inline-block"})
    }
  return (
    <div className="menue ">
        <div className="posts bgcolor">
            <div className="row   bg-light">
            <center>
            <h4 className="like">You May Like This</h4>
            </center>
                {posts.map((item)=>(
            <div className="row post my-2">
                <div className="col-5 img">
                    <img src={item.img} alt={item.title}  />
                </div>
                {/* <hr className="display-none-md"/> */}
                <div className="col-7 content fatherbtn">
                   <Link to={`/post/${item.id}`} id="link">
                    {item.title}
                    </Link>
                    {/* <p id="showmore" style={hide}>{item.desc}</p> */}
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
