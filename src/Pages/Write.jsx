import React from 'react'
import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
export default function Write() {
  const [value, setValue] = useState('');
console.log(value)
  return (
    <div className="container-fluid my-2 makePost">
      <div className="container-md">
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="editor">
            <input type="text" placeholder='write Your title' className='form-control my-2'/>
            <ReactQuill theme="snow" placeholder='Write Your Post Description' className='edit' value={value} onChange={setValue} />
          </div>
        </div>
        <div className="col-md-6">
        <div className='writePage'>
            <div className="contained mt-3">
              <h3>Publish Post</h3>
              <form action=""> 
                <input type="file" className="form-control" name='image' />
                <input type="text" className="form-control my-2" placeholder='write your title' name="title" />
                <textarea type="text" className="form-control" placeholder='write your post description' name="desc" />
                <div className="categories">
                  <h5>Categories</h5>
                  <input type="radio" className='form-check-input' name='cat' value="Art"/><label className="form-check-label">Art</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="Technology"/><label className="form-check-label">Technology</label><br/>
                  <input type="radio" className='form-check-input' name='cat' value="Sport"/><label className="form-check-label">Sport</label><br/>
                </div>
                <button type='submit' className="form-control my-2 btn" >Publish</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
