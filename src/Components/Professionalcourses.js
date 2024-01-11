import React from 'react'
import integrations from'../Images/integrations.png'

export default function Professionalcourses() {
  return (
    <div class="container " style={{marginTop:'5%'}}>
        <div class="row" style={{marginTop:'7%'}}>
            <div class="col animation col-12 col-sm-6 col-md-12 col-lg-6" >
                <h1 style={{fontWeight:'700',fontSize:'42px' }}>Professional <span>Courses</span></h1>
                <p style={{fontSize:'20px' }} >Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                <button type='button'  style={{borderRadius:'2rem',padding:'7px 20px 7px 20px',backgroundColor:'#303032',color:'whitesmoke',fontWeight:'700'}}>Explore Courses</button><br/><br/><br/><br/><br/>
            </div>
            <div class="col img-fluid  col-12 col-sm-6 col-md-12 col-lg-6" data-aos="fade-up"  >
                <img src={integrations}  class="img-responsive img-fluid" alt='integrations'  style={{width:'100%',marginTop:'-9%',opacity:'0.5'}} />
            </div>
        </div>
    </div>
  )
}
