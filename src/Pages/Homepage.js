import React from 'react'
// import Footer from '../Components/Footer';
// import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Print from '../Components/Print';
import Courses from '../Components/Courses';
import Professionalcourses from '../Components/Professionalcourses';
import CodeAsthram from '../Components/CodeAsthram';
import Services from '../Components/Services';

export default function Homepage() {
  return (
    <div>
    <Home/>
    <Services/>
    <CodeAsthram/>
    <Print/>
    <Courses/>
    <Professionalcourses/>
  
    </div>
  )
}
