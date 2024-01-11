// import {Container,Nav,Navbar}from 'react-bootstrap'
// import HomePage from '../Pages/Homepage';

// function Navbars() {
//   return (
//     <>
//       <Navbar  style={{backgroundColor:'black',width:'100%'}}>
//         <Container >
//           <Navbar.Brand href={<HomePage/>} style={{color:'#f2f2f2'}}>Home</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home"style={{color:'#f2f2f2'}}>Courses</Nav.Link>
//             <Nav.Link href="#features"style={{color:'#f2f2f2'}}>About Us</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
    
      
//     </>
//   );
// }

// export default Navbars;




// import React from 'react';
// import {  NavLink, Outlet } from 'react-router-dom';
// import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
// import './Navbar.css'



// export default function Nav() {
//  let [toggle,setToggle]=React.useState(false);
//  console.log(toggle)
//   return (
//     <div >
//       <div className='navbar' class='container-fluid p-5' style={{backgroundColor: '#131314', color: '#b9b9b9',marginBottom:'none' }}>
//         <div class="row">
//         <div class="col"><NavLink className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></div>
//         <div class="col"><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></div>
//         <div class="col"><NavLink className={({ isActive }) => isActive ? "act" : null} to="about">About</NavLink></div>
         
        
        

//         </div>
        
//         </div>
//         <div className='navbtn'  >
//         <div onClick={() => setToggle(prev => !prev)}>     
//           {toggle ? <RiCloseLine size={27} color='white' /> : <RiMenu3Line size={27} color='white' />}
//         </div>
   
//           {toggle && 
//             <ul className='navmob scale-up-center'>
//             <li><NavLink className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
//             <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
//               <li> <NavLink className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li></ul>
//           }
//         </div>
   
      
//       <Outlet/>
   
//     </div>
//   )
// }


import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Navbar.css";
import { Outlet } from 'react-router-dom';
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import Footer from './Footer';



export default function Nav() {
 let [toggle,setToggle]=React.useState(false);
 console.log(toggle)
  return (
    <div >
      <div className='navbars' style={{margin:'0%',width:'100%'}}>
        <ul className=' sec_pading'>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="." style={{fontSize:'18px'}}>Home</NavLink></li>
         <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses" style={{fontSize:'18px'}}>Courses</NavLink></li>
         <li> <NavLink className={({ isActive }) => isActive ? "act" : null} to="about" style={{fontSize:'18px'}}>About Us</NavLink></li>
        </ul>
        </div>
        <div className='navbtn'  style={{margin:'0%',width:'100%'}} >
        <div onClick={() => setToggle(prev => !prev)}>     
          {toggle ? <RiCloseLine size={27}  style={{color:'whitesmoke'}} /> : <RiMenu3Line size={27} color='white' />}
        </div>
   
          {toggle && 
            <ul className='navmob scale-up-center'  style={{margin:'0%',width:'100%'}}>
            <li><NavLink className={({ isActive }) => isActive ? "act" : null} to=".">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "act" : null} to="courses">Courses</NavLink></li>
              <li> <NavLink className={({ isActive }) => isActive ? "act" : null} to="about">About Us</NavLink></li></ul>
          }
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}