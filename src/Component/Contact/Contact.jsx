import React from 'react'
import './Contact.css'
import card40 from "../images/card40.jpg"

const Contact = () => {
   
        // function callvale(){
        //    var Fname= document.getElementById("Fname").value;
        //    var Sname= document.getElementById("Sname").value;
        //    var Email= document.getElementById("exampleInputEmail1").value;
        //    var Npassword= document.getElementById("exampleInputPassword1").value;
        //    var textAreaa= document.getElementById("exampleFormControlTextarea1").value;
        //    console.log(Fname);
        //    console.log(Sname);
        //    console.log(Email);
        //    console.log(Npassword);
        //    console.log(textAreaa);
    
    
        // }
    
        
  return (
    <div>
      <div className="c-images " >
        <img src={card40} alt=""  className='i mg-fluid' style={{width:"100%", height:"700px"}}/>
      </div>

      <div className="container-fluid">
          <div className="row justify-content-center mt-4 " data-aos='fade-right'>
              <div className="col-md-3" id='contact-cont'>
                  <div className="contact">
                     <i class="bi bi-telephone-forward-fill"></i><br />
                     <h2>MAKE A CALL</h2>
                     <h6> +918506922777 <br />
                        +918506944777</h6>

                  </div>
                  <div className="contact">
                  <i class="bi bi-envelope-fill"></i><br />
                     <h2>Send A Mail</h2>
                     <h6> jingleholidaybazar@gmail.com <br />
                     thejingleholidaybazar@gmail.com</h6>


                  </div>
                  <div className="contact" >
                  <i class="bi bi-geo-alt-fill"></i><br />
                     <h2>Find Us</h2>
                     <h6> 3C, A1 Sector 10, Noida <br />
                          Uttar Pradesh, India</h6>


                  </div>

              </div>
              <div className="col-md-7 " id='contact-cont' data-aos='fade-left'>
                  <div className="contact-form" >
                       <form >
                          <div className="mb-3" id='contact-sec'>
                              <label for="exampleInputEmail1" className="form-label">First Name</label>
                              <input type="text" className="form-control"   placeholder='ENTER FIRST NAME' id='Fname' />
                              
                          </div>
                           
                          <div className="mb-3" id='contact-sec'>
                              <label for="exampleInputEmail1" className="form-label">Last Name</label>
                              <input type="text" className="form-control"   placeholder='ENTET LAST NAME' id='Sname'/>
                              
                          </div>

                          <div className="mb-3" id='contact-sec'>
                              <label for="exampleInputEmail1" class="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='ENTER EMAIL'  />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div className="mb-3" id='contact-sec'>
                              <label for="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='ENTER PASSWORD'/>
                          </div>
                         

                          <div className="mb-3" id='contact-sec'>
                              <label for="exampleFormControlTextarea1" className="form-label"> Textarea</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                          <div className="mb-3 form-check" id='contact-sec'>
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                          </div>


                          <button type="submit" className="btn btn-primary">Submit</button>
                       </form>
                  </div>

              </div>
              
          </div>
      </div>



    </div>
  )
}

export default Contact; 