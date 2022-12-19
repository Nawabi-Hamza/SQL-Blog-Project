import React from 'react'
import "../Style.scss"
export default function Footer() {
  const ULs = {
    textDecoration:"none"
  }
  return (
    <div className='p-3 py-5' style={{backgroundColor:"brown",color:"white","^:hover":{
      color:"red"
    }}}>
    <div className='container-lg myFooter'>
      <div className="row">
      <div className='col-md-4'>
      <ul style={ULs}>
      <li>About</li>
      <li>Contact</li>
      <li>Home</li>
      <li>Login</li>
      <li>Register</li>
      <li>Items</li>
      <li>Props</li>
      </ul>
      </div>
      <div className="col-md-4">
        <h4>Made in Startup With 💛</h4>
        <p>
          Veritatis incidunt quas in vel facilis quod velit accusamus neque! Sint dignissimos harum culpa laudantium architecto? Temporibus architecto autem id similique quis maxime fuga iste laboriosam corporis in porro ducimus quo sed dolore, fugit ipsam cumque sequi quisquam odio cum.
        </p>
      </div>
        <div className='col-md-4'>
          <input type="text" className='form-control' placeholder='Email' />
          <textarea type="text"  className='form-control  my-2' placeholder='Message' />
          <button className='form-control btn btn-dark'>Send</button>
        </div>
      </div>
      </div>
    </div>
  )
}
