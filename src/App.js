import './App.css';
import React from 'react';
import HomePage from './Home/Home';
  // import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
  import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ContactPage from './Home/Contact';
import NavBarSection from './Home/Navbar';
import Footer from './Home/Footer';
import Write from './Pages/Write';
import Single from './Pages/Single';
import Register from './Pages/Register';
import Login from './Pages/Login';
// import "./Style.scss"

const Layout = ()=>{
  return(<div>
    <NavBarSection />
    <Outlet/>
    <Footer/>
  </div>)
}
const router = createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[{
      path:"/", 
      element:<HomePage/>
    },{
      path:"/post/:id",
      element:<Single/>
    },{
      path:"/write",
      element:<Write/>
    },{
      path:"/contact",
      element:<ContactPage/>
    },{
      path:"/home",
      element:<HomePage/>
    }
  ]
},{
  path:"/register",
  element:<Register/>
},{
  path:"/login",
  element:<Login/>
}

])
function App(){
              return(
                <div>
                  {/* <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/contact" element={<ContactPage/>} /> 
                  </Routes>
                  </BrowserRouter> */}
                {/* <div className="Apps"> */}
                  {/* <div className='containers'> */}
                    <RouterProvider router={router} />
                  {/* </div> */}
                {/* </div> */}
               </div>
                     );

      }
export default App; 