import React from 'react'
import ReactQuill from 'react-quill';
import { useState,useContext } from 'react';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate,useLocation } from "react-router-dom"

export default function Write() {
  const state  = useLocation().state;
  const naivigate = useNavigate()

  const [title,setTitle] = useState(state?.title || '')
  const [value, setValue] = useState(state?.description || '');
  const [file,setFile] = useState(null)
  const [cat,setCat] = useState(state?.cat  || '')
  const {currentUser} = useContext(AuthContext)
  const [user_id,setUser_id] = useState(currentUser?.id)
// console.log(user_id)
// console.log(value)
// console.log(cat)
  // for upload img
    const upload = async()=>{
      try{
        const formData = new FormData();
        formData.append("file",file)
        const res = await axios.post("http://localhost:4000/upload",formData)
        return res.data;
      }catch(error){
        console.log(error)
      }
    }
    // all post send in database
  const handleSubmit = async(e)=>{
    e.preventDefault()
    // alert(title+file+cat+user_id+value)
    const imgUrl = await upload()
    const dataUser = {
      title:title,
      description:value,
      cat:cat,
      img:file? imgUrl:"",
      user_id:currentUser.id
    }
    try{
      state ?  await axios.patch(`http://localhost:4000/posts/${state.id}`,dataUser) :
      await axios.post("http://localhost:4000/posts/",dataUser) 
      alert("your Post Uploaded")
      naivigate("/")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="container-fluid my-2 makePost">
      <div className="container-md">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="editor">
            <input type="text" placeholder='write Your title' value={title} onChange={(e)=>setTitle(e.target.value)} className='form-control my-2'/>
            <ReactQuill theme="snow" placeholder='Write Your Post Description' className='edit my-3' value={value} onChange={setValue} />
          </div>
        </div>
        <div className="col-md-6">
        <div className='writePage'>
            <div className="contained mt-3">
              <h3>Publish Post</h3>
              <form action=""> 
                <input type="file" className="form-control my-3" name='img' onChange={(e)=>setFile(e.target.files[0])}/>
                {/* <input type="text" className="form-control my-2" placeholder='write your title' name="title" />
                <textarea type="text" className="form-control" placeholder='write your post description' name="desc" /> */}
                <div id="tempImg">{file && <img src={URL.createObjectURL(file)} alt={file}/>}</div>
                <div className="categories">
                  <h5>Categories</h5>
                  <input type="radio" className='form-check-input' name='cat' value="art" 
                  onChange={(e)=>setCat(e.target.value)}  checked={cat === "art"}/><label className="form-check-label">Art</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="technology" 
                  onChange={(e)=>setCat(e.target.value)} checked={cat === "technology"}/><label className="form-check-label">Technology</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="health" 
                  onChange={(e)=>setCat(e.target.value)} checked={cat === "health"} /><label className="form-check-label">Health</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="sport" 
                  onChange={(e)=>setCat(e.target.value)} checked={cat === "sport"} /><label className="form-check-label">Sport</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="music" 
                  onChange={(e)=>setCat(e.target.value)} checked={cat === "music"} /><label className="form-check-label">Music</label><br/>
                </div>
                <button type='submit' className="form-control my-2 btn" onClick={handleSubmit} >Publish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
