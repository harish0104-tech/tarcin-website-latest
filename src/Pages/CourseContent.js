import React from 'react'
import "./CourseContent.css"
// import girl from '../Images/girl.png'
// import design from '../Images/design.svg'
import FullStack from '../Images/Fullstack.jpg'
import Robotics from '../Images/Robotics.jpg'
import CloudComputingCourse from '../Images/CloudComputingCourse.jpg'
import AppDevelopment from '../Images/AppDevelopment.jpg'
import Python from '../Images/Python.jpg'
import PCB from '../Images/PCB.png'
import Arrow from '../Images/Arrow.png'

export default function CourseContent() {
  return (
    <div>
      {/* <div class="row" className='designs'>

        <div class="col ">
          <div className='landcontant'>
            <h2> Our Professionl Courses</h2>
            <h4>Replenish man have thing gathering lights yielding shall you</h4>
          </div>
        </div>

        <div class="col mt-5 mx-5 text-center  max-w-screen-md mx-auto">
          <img src={girl}  alt='girl holding books' style={{width:'480px',display:'flex',alignItems:'flex-end',marginLeft:'60%'}}/>
        </div>

      </div> */}

      < div class="container"  >
        <div class="row" >

          <div class="col-sm-12 col-md-12 col-lg-4" 
         data-aos="fade-right"
         data-aos-easing="ease-in-back"
         data-aos-delay="1000"
         data-aos-offset="0">
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555', }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={FullStack} class="img-thumbnail" alt='robot' style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">FULL STACK</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4"  
           data-aos="fade-right"
           data-aos-easing="ease-in-back"
           data-aos-delay="2000"
           data-aos-offset="0">
 
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555' }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={Robotics} alt='robot' class="img-thumbnail" style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">	ROBOTICS & IOT</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4"
          data-aos="fade-right"
          data-aos-easing="ease-in-back"
          data-aos-delay="3000"
          data-aos-offset="0">
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555' }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={CloudComputingCourse} class="img-thumbnail" alt='robot' style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">CLOUD COMPUTING</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>








          {/* Second column */}
          <div class="col-sm-12 col-md-12 col-lg-4" 
           data-aos="fade-left"
           data-aos-easing="ease-in-back"
           data-aos-delay="3000"
           data-aos-offset="0">
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555' }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={AppDevelopment}  class="img-thumbnail" alt='robot' style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">APP DEVELOPMENT</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4" data-aos="fade-left"
        
        data-aos-easing="ease-in-back"
        data-aos-delay="2000"
        data-aos-offset="0" >
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555' }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={Python} class="img-thumbnail"  alt='robot' style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">	​PYTHON ADVANCED</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4"  data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0" >
            <div class=" mb-5 " >
              <div class="card mt-5" style={{ boxShadow: '5px 3px  20px #555' }}>
                <div class="card-body ">
                  <div class="img">
                    <img src={PCB}  class="img-thumbnail" alt='robot' style={{ width: '100%' }} />
                  </div>
                  <h3 style={{ marginTop: '4%', fontSize: '24px', fontWeight: '700' }} className="text-center max-w-screen-md mx-auto">PCB DESIGNING</h3>

                  <div class="d-grid mt-3" className='text-center max-w-screen-md mx-auto' style={{backgroundColor:'#f8f9fa'}}>
                    <img src={Arrow}  alt='robot' style={{ width: '15%' }} />

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



