import React from 'react';
import './Animation.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Printi from '../Images/printi.jpg'


export default function Print() {
    return (
        <div class="container" style={{marginTop:'5%'}}>
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-6" >
                    <div class="print "data-aos="fade-right" data-aos-duration="1000">
                        <div class="writing ">
                            <hr class='h1' /><br/>
                                <h1><span>3D Printing</span> Services</h1>
                                <p style={{fontSize:'18px',textAlign:'justify'}}>At the intersection of art, science, and engineering, 3D printing offers a transformative journey limited only by your imagination. It's a realm where you can sculpt personalized jewelry, engineer complex prototypes, reimagine fashion, and even print life-changing medical devices. Here, the only constraint is the extent of your creativity.</p>
                            <button type='button' style={{borderRadius:'0.5rem'}}class="text-bg-dark p-2">Learn More</button><br/><br/><br/>
                            <hr class='h2' /><br/><br/>
                        </div>
                    </div>
                </div>


                <div class="col  col-12 col-sm-6 col-lg-6 col-md-12 "  data-aos="zoom-in-down" style={{marginTop:'-1%%'}}>
    <div className='imagee'>
        <img src={Printi} class="img-responsive img-fluid" alt='3dprintingimages'  />
    </div>
</div>

               
            </div>
        </div>);}