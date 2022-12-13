import React from 'react'
import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
export default function Write() {
  const [value, setValue] = useState('');
console.log(value)
  return (
    <div className="container-fluid my-2">
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    <div className='write'>
        <div className="contained mt-5">
          <form action=""> 
            <input type="file" className="form-control" name='image' />
            <input type="text" className="form-control my-2" placeholder='write your title' name="title" />
            <textarea type="text" className="form-control" placeholder='write your post description' name="desc" />
            <button type='submit' className="form-control my-2 btn btn-dark" >Publish</button>
          </form>
        </div>
      </div>
    </div>
  )
}
