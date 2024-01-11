import React from 'react';
import 'aos/dist/aos.css'
import "../index.css"
import Robot from '../Images/RoboticsAndIoT.jpg'
import cloud from '../Images/CloudComputing.jpg'
import Industrial from '../Images/Industrial.jpg'
export default function Services() {
  return (<>
      < div class="container"  >
        <div class="row" >
            <div className='Services col-md-12  col-sm-12 col-lg-10 text-center max-w-screen-md mx-auto' style={{marginTop:'2%'}}>
              <h1 data-aos="fade-right" style={{background: 'linear-gradient(to left, #F49867,#AE67FA )',    WebkitBackgroundClip: 'text', color: 'transparent', display: 'inline-block',fontWeight:'700'}}>Our <span style={{background: 'linear-gradient(to left,  #F49867,#AE67FA,)', fontWeight:'700',   WebkitBackgroundClip: 'text', 
    color: 'transparent', 
    display: 'inline-block',}}>Services</span></h1>
              <h5  className="text-center max-w-screen-md mx-auto"style={{ width: '45%', fontSize: '16px' }}>Skill line is one powerful online software suite that combines all the tools needed to run a successful school or office.</h5>
            </div>

       
<div class="col-sm-12 col-md-12 col-lg-4" data-aos='fade-right' data-aos-duration="1000">
      <div class=" mb-5 " >
        <div class="card mt-5" style={{ boxShadow:'5px 3px  20px #555' }}>
          <div class="card-body ">
            <div class="img">
            <img src={Robot}  alt='robot' style={{ width: '100%' }} />
            </div>
            <h3 style={{marginTop:'4%',fontSize:'24px',fontWeight:'700'}}className="text-center max-w-screen-md mx-auto">Robotics and IOT</h3>

            <div class="d-grid">
              <p style={{fontSize:'16px',textAlign:'justify',wordSpacing:'4px',padding:'6px'}}>Welcome to the exciting world of Robotics and the Internet of Things (IoT)! This comprehensive course is designed to provide you with a solid foundation in both robotics and IoT, enabling you to explore the convergence of these two cutting-edge-technologies. but these technologies are evolving together to ease human life</p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-12 col-lg-4" data-aos='fade-up' data-aos-duration="1000" >
      <div class=" mb-5 " >
        <div class="card mt-5" style={{ boxShadow:'5px 3px  20px #555' }}>
          <div class="card-body ">
            <div class="img">
            <img src={cloud}  alt='robot' style={{ width: '100%' }} />
            </div>
            <h3 style={{marginTop:'4%',fontSize:'24px',fontWeight:'700'}}className="text-center max-w-screen-md mx-auto">	​​Cloud Computing</h3>

            <div class="d-grid" >
              <p style={{fontSize:'16px',textAlign:'justify',wordSpacing:'4px',padding:'6px'}} text-center max-w-screen-md mx-auto>Whether you're a student, an aspiring IT professional, or a business owner seeking to leverage cloud services, this course will provide you with the expertise necessary to navigate the dynamic landscape of  cloud computing. cloud computing means storing and accessing data and programs over the internet.</p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-md-12 col-lg-4" data-aos='fade-left'  data-aos-duration="1000" >
      <div class=" mb-5 " >
        <div class="card mt-5" style={{ boxShadow:'5px 3px  20px #555' }}>
          <div class="card-body ">
            <div class="img">
            <img src={Industrial}  alt='robot' style={{ width: '100%' }} />
            </div>
            <h3 style={{marginTop:'4%',fontSize:'24px',fontWeight:'700'}}className="text-center max-w-screen-md mx-auto">Industrial 4.0</h3>

            <div class="d-grid">
              <p style={{fontSize:'16px',textAlign:'justify',wordSpacing:'4px',padding:'6px'}}>Industry 4.0 projects are at the forefront of this revolution, focusing on the integration of cutting-edge technologies to enhance productivity, reduce costs, and drive innovation. Replacing manual inspection business models with AI-powered visual insights reduces manufacturing errors and saves money and time.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
    </>
  )}






  
//   <div class="col col-md-12 col-lg-4 col-sm-12 text-center max-w-screen-md mx-auto" data-aos='fade-up' data-aos-duration="1000" style={{marginTop:'2%',display:'block'}} >
//   <div className='fl'  style={{ width: '100%',height:'100%',padding:'15px', paddingBottom:'1px',boxShadow:'5px 3px  20px #555' }}>
//           <img  src={cloud}   alt='cloud' style={{ width: '100%' }} />
//           <h3 style={{marginTop:'4%',fontSize:'24px',fontWeight:'700'}}className="text-center max-w-screen-md mx-auto">​​Cloud Computing</h3>
//           <p>Whether you're a student, an aspiring IT professional, or a business owner seeking to leverage cloud services, this course will provide you with the expertise necessary to navigate the dynamic landscape of  cloud computing. cloud computing means storing and accessing data and programs over the internet.</p>
//     </div>
// </div>

// <div class="col col-md-12 col-lg-4 col-sm-12 text-center max-w-screen-md mx-auto"  data-aos='fade-left'  data-aos-duration="1000"style={{marginTop:'2%',display:'block'}}>
// <div className='fl aos-init '  style={{ width: '100%',height:'100%',padding:'15px', paddingBottom:'1px' ,boxShadow:'5px 3px  20px #555'}} >
//       <img src={Industrial}  alt='Industrial' style={{ width: '100%' }} />
//       <h3 style={{marginTop:'4%',fontSize:'24px',fontWeight:'700'}}className="text-center max-w-screen-md mx-auto">Industrial 4.0</h3>
//       <p>Industry 4.0 projects are at the forefront of this revolution, focusing on the integration of cutting-edge technologies to enhance productivity, reduce costs, and drive innovation. Replacing manual inspection business models with AI-powered visual insights reduces manufacturing errors and saves money and time.</p>
// </div>
// </div>

// </div>
// </div>













