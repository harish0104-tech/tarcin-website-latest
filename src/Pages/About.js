import React from 'react'
import './About.css';
import im1 from '../Images/AAA.png'
import im2 from '../Images/emgyadava.jpeg'
import im3 from '../Images/Fairlands.png'
import im4 from '../Images/KIT.png'
import im5 from '../Images/Klncelogo.gif'
import im6 from '../Images/mahatma.png'
import im7 from '../Images/sathak.png'
import im8 from '../Images/sathakeng.png'
import im9 from '../Images/solamalai.png'
import im10 from '../Images/ssm.png'
import im11 from '../Images/SIT.png'
import im12 from '../Images/VCET.png'
import CRAFT from '../Images/Crafts.png'
import Nexon from '../Images/Nexon.png'
import Robot from '../Images/robot.png'
import Origin from '../Images/Origin.svg'
import fatherson from '../Images/father-sons-making-robot.jpg'
import '../index.css';
export default function About() {
  return (
    <>
      <div class="w-150 design " style={{ backgroundImage: `url(${Origin})`, backgroundPosition: '50% 50%', left: '0.1px', right: '0', height: '70vh', backgroundRepeat: 'no-repeat no-repeat', backgroundSize: '100% 100%' }}>
        <div class="container text-center max-w-screen-md mx-auto " >
          <div class="row ">
            <div class="col-lg-6  container " style={{ marginTop: '8%' }}>
              <h3 style={{ fontWeight: '700', fontSize: '32px' }} >  Tarcin Robotic LLP</h3><br/>
              <h6 style={{ borderLeft: '6px solid #104a5a', wordSpacing: '9px', fontWeight: '400', fontSize: '20px', paddingLeft: '18px', fontStyle: 'italic', textAlign: 'justify', lineHeight: '1.8rem' }}> Tarcin Robotic is a Product Engineering & Digital Transformation company that makes you an professional leader through Innovative solutions. We focus on digital transformation and help them to  achieve profitable results</h6>
            </div>
         
            <div class="col-lg-6 col-sm-12   text-center max-w-screen-md mx-auto "  style={{marginTop:'5%'}}>
              <img class="  text-center max-w-screen-md mx-auto " src={fatherson} alt='robotmaking' style={{ width: '75%' ,marginTop:'5%'}}></img>
            </div>
          </div>
        </div>
      </div>

      <div className='inspartners' style={{ backgroundColor: 'white' }}>
        <div class="container ">
          <div class="row">
            <div class="col-12 col-lg-8 mt-5 " >
              <h6 style={{ fontSize: '18px', fontWeight: '650', textAlign: 'justify', wordSpacing: '2px', marginTop: '10%', lineHeight: '1.7rem' }}>Welcome to Tarcin Robotic LLP, a pioneering technology company that was established in 2018 with a vision to drive innovation and shape the digital future. Over the years, we have become synonymous with excellence in the fields of robotics, cloud computing, ethical hacking, app development, full-stack development, PCB designing, 3D printing, networking, and more.<br /><br />

              At Tarcin Robotic LLP, our mission is clear: to bridge the gap between human ingenuity andtechnological advancement. We are dedicated to harnessing the latest technology to enhance lives,transform industries, and inspire innovation.

              </h6>
            </div>
            <div class="col col-lg-4 mb-5 mt-2 text-center max-w-screen-md mx-auto" >
              <img src={Robot} alt='robot' style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <h1>OUR INSTITUTIONAL PARTNERS</h1>
        <h6>More than 20+ Institutions Signed "MOU"</h6>
        <div className="slider">
          <div className="slide-track" >

            <div className="slide">
              <img src={im1} alt="images" />
            </div>
            <div className="slide">
              <img src={im2} alt="images" />
            </div>
            <div className="slide">
              <img src={im3} alt="images" />
            </div>
            <div className="slide">
              <img src={im4} alt="images" />
            </div>
            <div className="slide">
              <img src={im5} alt="images" />
            </div>
            <div className="slide">
              <img src={im6} alt="images" />
            </div>
            <div className="slide">
              <img src={im7} alt="images" />
            </div>
            <div className="slide">
              <img src={im8} alt="images" />
            </div>
            <div className="slide">
              <img src={im9} alt="images" />
            </div>
            <div className="slide">
              <img src={im10} alt="images" />
            </div>
            <div className="slide">
              <img src={im11} alt="images" />
            </div>
            <div className="slide">
              <img src={im12} alt="images" />
            </div>




            <div className="slide">
              <img src={im1} alt="images" />
            </div>
            <div className="slide">
              <img src={im2} alt="images" />
            </div>
            <div className="slide">
              <img src={im3} alt="images" />
            </div>
            <div className="slide">
              <img src={im4} alt="images" />
            </div>
            <div className="slide">
              <img src={im5} alt="images" />
            </div>
            <div className="slide">
              <img src={im6} alt="images" />
            </div>
            <div className="slide">
              <img src={im7} alt="images" />
            </div>
            <div className="slide">
              <img src={im8} alt="images" />
            </div>
            <div className="slide">
              <img src={im9} alt="images" />
            </div>
            <div className="slide">
              <img src={im10} alt="images" />
            </div>
            <div className="slide">
              <img src={im11} alt="images" />
            </div>
            <div className="slide">
              <img src={im12} alt="images" />
            </div>
          </div>
        </div>
        <h1 class="mt-5">INDUSTRIAL PARTNERS</h1>

      </div>
      <div class="container">
        <div class="row">
          <div class="col col-lg-6 " >
            <img src={CRAFT} alt='Craft' style={{ width: '100%' }} />
          </div>
          <div class="col col-lg-6 mt-3">
            <img src={Nexon} alt='Nexon' style={{ width: '100%' }} />

          </div>
        </div>
      </div><br/><br/>

    </>
  )
}
