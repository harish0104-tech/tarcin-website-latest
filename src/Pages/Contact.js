import React from 'react'
import Tarcin from '../Images/Tarcin.png'

export default function Contact() {
  return (
    <div>
      <div class="container  ">
        <div class="row  ">
          <div class=" mt-5 col-md-12  col-sm-12  col-lg-4  mx-2 text-center max-w-screen-md mx-auto"   >

            <h2 style={{ fontSize: '48px', fontWeight: '700', color: 'black', fontStyle: 'italic' }} > CONTACT US</h2><br />

            <img src={Tarcin} alt='tarcin-img' style={{ width: '100%' }}   />

          </div>

          <div class="col-lg-6 mt-5  col-sm-12 mx-2"   >



        <div >
          <div className="form_rows row   "  >
            {/* Your Name Field */}
            <div className="form_field mb-3 col-12  col-12 col-md-6 col-lg-8  " style={{width:'100%'}}>
              <div className="row">
                <label className="col-form-label col-sm-auto form_label" style={{ width: '200px' }} htmlFor="name">
                  <span className="form_label_content" style={{color:'black',fontWeight:'700'}}>Your Name</span>
                  <span className="form_mark"  style={{color:'black',fontWeight:'700'}}> *</span>
                </label>
                <div className="col-sm">
                  <input type="text" className="form-control " name="name" required="1" id="name" style={{width:'350px'}}/>
                </div>
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="form_field mb-3 col-12  col-12 col-md-6 col-lg-8" style={{width:'100%'}}  >
              <div className="row " >
                <label className="col-form-label col-sm-auto form_label" style={{ width: '200px' }} htmlFor="phone">
                  <span className="form_label_content"  style={{color:'black',fontWeight:'700'}}>Phone Number</span>
                </label>
                <div className="col-sm">
                  <input type="tel" className="form-control form_input" name="phone" id="phone"  style={{width:'350px'}}/>
                </div>
              </div>
            </div>

            {/* Your Email Field */}
            <div  className="form_field mb-3 col-12  col-12 col-md-6 col-lg-8"style={{width:'100%'}}>
              <div className="row ">
                <label className="col-form-label col-sm-auto form_label" style={{ width: '200px' }} htmlFor="email">
                  <span className="form_label_content"  style={{color:'black',fontWeight:'700'}}>Your Email</span>
                  <span className="form_mark"  style={{color:'black',fontWeight:'700'}}> *</span>
                </label>
                <div className="col-sm">
                  <input type="email" className="form-control form_input" name="email_from" required="true" id="email" data-fill-with="email"  style={{width:'350px'}}/>
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div className="form_field mb-3 col-12  col-12 col-md-6 col-lg-8" style={{width:'100%'}} >
              <div className="row ">
                <label className="col-form-label col-sm-auto form_label" style={{ width: '200px' }} htmlFor="subject">
                  <span className="form_label_content"  style={{color:'black',fontWeight:'700'}}>Subject</span>
                  <span className="form_mark"  style={{color:'black',fontWeight:'700'}}> *</span>
                </label>
                <div className="col-sm">
                  <input type="text" className="form-control form_input" name="subject" required="true" id="subject" style={{width:'350px'}} />
                </div>
              </div>
            </div>

            {/* Your Question Field */}
            <div className=" col-12 col-md-6 col-lg-8 col-sm-12" style={{width:'100%'}}>
              <div className="row ">
                <label className="col-form-label col-sm-autoform_label" style={{ width: '200px' }} htmlFor="question">
                  <span className="form_label_content"  style={{color:'black',fontWeight:'700'}}>Your Question</span>
                  <span className="form_mark"  style={{color:'black',fontWeight:'700'}}> *</span>
                </label>
                <div className="col-sm">
                  <textarea className="form-control form_input" name="description" required="1" id="question" rows="3" style={{width:'350px'}}></textarea>
                </div>
              </div>
            </div>



            {/* Submit Button */}
            <div className=" col-12 col-md-6 col-lg-12 col-sm-12 mt-3 mb-5  "  style={{padding:'20px'}}>
              <button type="submit" className="form_send btn  " style={{backgroundColor:'#353537',color:'white'}}>
                Submit
              </button>
             </div>
          </div>














          </div>
          </div>  
        </div>
      </div>
    </div>


  )
}
