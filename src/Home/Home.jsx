// import NavBarSection from "./Navbar"
// import { Button } from "@mui/material"
// import NavBBB from "./NavBBB"
import posts from "./data"
import "../Style.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
function HomePage(){
    const [ hide,show ] = useState({display:"none"})
    
    const handleShow=()=>{
        show({display:"inline-block"})
    }
    return(<>
    <div className="home">
        <div className="posts bgcolor">
            <div className="container-lg">
            <div className="row pt-2 p-md-5 bg-light">
                {posts.map((item)=>(
            <div className="row post">
                <div className="col-md-6 img">
                    <img src={item.img} alt={item.title}  className="w-100 h-75 w-md-50"/>
                </div>
                {/* <hr className="display-none-md"/> */}
                <div className="col-md-6 content px-md-5 mb-5 mb-md-0 fatherbtn">
                   <Link to={`/post/${item.id}`} id="link">
                    <h1>{item.title}</h1>
                    </Link>
                    <p>{item.desc}</p>
                    <p id="showmore" style={hide}>{item.desc}</p>
                    <Link to={`/post/${item.id}`}>
                    <button className="btn btn-dark mt-md-5" onClick={handleShow}>Read More</button>
                    </Link>
                </div>
            </div>
                ))}
            </div>
         </div>
        </div>
    </div>
    </>)
}
export default HomePage