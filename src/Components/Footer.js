import "bootstrap/dist/css/bootstrap.min.css";
import Vector from '../Images/Vector.png'
import Email from '../Images/Email.png';
import {FaTwitter,FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"
import { Link } from "react-router-dom";
function Footer() {
  return (<>
    <div style={{ border: '10px solid #878787', padding: '0px' }} >
      <div class="container-fluid    p-5 " style={{ backgroundColor: '#131314', color: '#ffffff' }}  >
        <div class="row container-fluid  ">
          <div class="col  float-sm-end  p-2 mx-4 mt-1" >
            <h1 class="fs-6 " >TARCIN ROBOTIC LLP</h1><br />
            <h5 class="fs-6  " style={{ listStyle: 'none' }}>Unlock the Tech Unleash the World</h5><br />
            <h6  class="heading"style={{ listStyle: 'none', fontSize: '20px' }}>Follow us</h6><br />
            <Link style={{textDecoration:'none'}}> <FaTwitter color='#199cff' size={35} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link>
              <Link style={{textDecoration:'none'}}> <FaInstagram color='#c6256d' size={35} spacing={"12px"} style={{ margin: "5px auto", gap: '10px' }} /></Link>
              <Link style={{textDecoration:'none'}}> <FaLinkedin color='#3273af' size={35} spacing={"12px"} style={{ margin: "5px auto", gap: '50px' }} /></Link>
              <Link style={{textDecoration:'none'}}> <FaFacebook color='#3976ea' size={35} spacing={"12px"} style={{ margin: "5px auto", gap: '50px' }} /></Link><br/>
            

            <Link to="contact-us"><button type="button" class="btn btn-light " style={{ width: '150px', fontWeight: '750', fontSize: '20px',padding:'10px',marginTop:"1.5rem" }}>Contact us</button></Link>
          </div>

          <div class="col float-sm-end p-2 mt-5  ">
            <ul>
              <li style={{ listStyleType: 'none' }}><h6 style={{ lineHeight: '2.1', color: '#b9b9b9' }} >Tarcin Robotics LLP,</h6></li>
              <li style={{ listStyleType: 'none' }}><h6 style={{ lineHeight: '2.1' }}>176 East, 6th Street, </h6></li>
              <li style={{ listStyleType: 'none' }}><h6 style={{ lineHeight: '2.1' }}>KK-Nagar,</h6></li>
              <li style={{ listStyleType: 'none' }}><h6 style={{ lineHeight: '2.1' }}>Madurai-625020.</h6></li>
            </ul>
          </div>

          <div class="col    float-sm-start mt-5 " >
            <h6> <img src={Vector} alt="call" style={{ padding: '8px' }} />+91 98846 75586</h6>
            <h6 > <img src={Email} alt="call" style={{ padding: '8px' }} />contact@tarcinrobotic.in</h6>
            <section class="s_map pt56 pb136" data-map-type="m" data-map-zoom="15" data-snippet="s_map" data-map-address="176 east,6th street,kk-nagar,Madurai-625020" data-name="Map">
              <div class="map_container o_not_editable" contenteditable="false">
                <div class="css_non_editable_mode_hidden">
                  <div class="missing_option_warning alert alert-info rounded-0 fade show d-none d-print-none o_default_snippet_text">

                  </div>
                </div>
                <iframe class="s_map_embedded o_not_editable" width="100%" height="100%" frameborder="0" title="map" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=176%20east%2C6th%20street%2Ckk-nagar%2CMadurai-625020&amp;t=m&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" contenteditable="false" style={{ paddingLeft: '25px', paddingRight: '25px' }}></iframe><div class="s_map_color_filter"></div>
              </div>
            </section>
          </div>
          
        </div>
        
      </div>
        
    </div>

    <div class=" container-fluid p-3 " style={{backgroundColor: '#131314', color: '#b9b9b9' }}>
          <h6 class="mx-5">Copyright © tarcinrobotic.in</h6>
        </div>





  </>

  )
}
export default Footer;