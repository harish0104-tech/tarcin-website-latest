  import React from 'react'
  import discusssion from '../Images/discussion.png'
  import './Courses.css'
            
export default function Courses() {
  return (
    <div class="container"style={{marginTop:'5%'}}>
        <div class="row">
            <div class="col col-12 col-sm-6 col-md-12 col-lg-6" >
                <img src={discusssion}  style={{width:'100%',marginTop:'40px'}} alt='courses'/>
            </div>

            <div class="col  animation col-12 col-sm-6" style={{marginTop:'5%'}}>
               <h2 style={{fontWeight:'700',fontSize:'43px',marginLeft:'5%'}}>OFFERS<span style={{fontWeight:'700',fontSize:'43px'}}> Online Courses</span></h2>
                <ul>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>Fullstack</li>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>Cloud Computing</li>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>App Development</li>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>C and C++</li>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>Python</li>
                  <li style={{fontWeight:'350',fontSize:'28px',listStyle:'none',display:'flex',flexDirection:'flex-start',fontFamily:'sans-serif'}}>Ethical Hacking</li>
                </ul>
            </div>
            
        </div>
    </div>
      )
}
            