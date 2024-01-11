import React from 'react'
import reactangle21 from '../Images/Rectangle21.svg'
import reactangle19 from '../Images/Rectangle19.svg'

export default function CodeAsthram() {
  return (
    <div class="container" style={{marginTop:'5%'}}>
      <div className="mt-28">
          <div  className="text-center max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">What is <span className="text-yellow-500">Code Asthram ?</span></h1>
            <h2 className="text-3xl font-medium mb-4">Where Creativity Meets Code!</h2>
            <p className="text-gray-500 text-center max-w-screen-md mx-auto" style={{width:'93%',fontSize:'18px'}}>Are you ready to embark on a journey of innovation, exploration, and learning through coding? At codeasthram, we're thrilled to provide you with a dynamic platform that supports two of the most popular programming languages: Arduino and Python. Our mission is to make coding accessible, engaging, and educational for all, regardless of your age or skill level.</p>
          </div>
        </div>
   
<div class="container" style={{marginTop:'2%'}}>
<div class="row">
            <div class="col  " data-aos="fade-up" >
                <img src={reactangle19}  style={{width:'50%',outlineStyle:'solid',outlineColor:'#dee2e6',padding:'10px'}} alt='reactangle21'/>
           
                 <img src={reactangle21} style={{width:'50%',outlineStyle:'solid',outlineColor:'#dee2e6',padding:'10px'}} alt='rectangle19'/>
            </div>
        </div>
</div>
        
    </div>
  )
}
