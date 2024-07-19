import React from 'react'
import './About.css'
import carda from "../images/carda.jpg"
import card36 from "../images/card36.jpeg"
import card37 from "../images/card37.jpeg"
import card38 from "../images/card38.jpeg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>

      
      <div className="c-images" >
        <img src={carda} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
      </div>

<div className="container-fluid">
    <div className="row justify-content-center mt-3">
      <div className="col-md-4" id='a-quicklinks' data-aos='fade-right'>
       
        <ul>
           <h2>Quick Links</h2>
          <li><Link to="/">International Tour Packages</Link></li>
          <li><Link to="/">India Tour Package</Link></li>
          <li><Link to="/">International Honeymoon Packages</Link></li>
          <li><Link to="/"> Indian Honemoon packages</Link></li>
          <li><Link to="/">Thailand Packages</Link></li>
          <li><Link to="/">Singapur Packages</Link></li>
          <li><Link to="/">Switzerland</Link></li> 
          <li><Link to="/">Flight Booking</Link></li>
          <li><Link to="/">Hotel Booking</Link></li>
          <li><Link to="/">Flight Booking</Link></li>
        </ul>

      </div>
      <div className="col-md-6" id='a-details' data-aos='fade-left'>
        <div className="a-details-1">
          <h2>Know More About Us - Jingle Holidays Bazar</h2>
          
          <p><span style={{color:'red', fontWeight:'bold'}}>Jingle Holiday Bazar Pvt Ltd</span> is pleased to announce the opening of their first office in Ghaziabad. I here by in conjunction with the  Jingle Holiday Bazar Pvt Ltd takes great pleasure in announcing the formation of our company to serve the needs of travellers in all aspects of their requirement. I have the pleasure of announcing the formation of <span style={{color:'orange',fontWeight:'bold'}}>Jingle Holiday Bazar Pvt Ltd, Ghaziabad specializing in Hotel Packages, Pilgrimage Packages,Honeymoon Packages, Corporate Tours, Airline / Train Ticket, Transportation etc.</span> Pleased to be our client and support us to promote our new venture Jingle Holiday Bazar Pvt Ltd & in return we will give you the memorable services that you will never forget.</p>
        </div>
        <div className="a-offer-sec">
              <div className='a-offer-sec-1'>
                <p><i className="bi bi-check-square"></i>We offer daily tours</p>
                <p> <i className="bi bi-check-square"></i>Never lose your deposit</p>
                <p> <i className="bi bi-check-square"></i>Handpicked hotels</p>

              </div>
              <div className='a-offer-sec-1'>
                <p><i className="bi bi-check-square"></i> Best price guarantee</p>
                <p> <i className="bi bi-check-square"></i>5 star accommodations</p>
                <p><i className="bi bi-check-square"></i>Special gifts & offers for you</p>
                
              </div>
        </div>
      </div>
    </div>
    {/* ---------------------------------------------------Our Clients review---------------------------------------------- */}
     <div className="row justify-content-center mt-5"data-aos='fade-right' >
      <div className="col-md-10" id='a-client-review'>
        <h2>Our Clients review</h2>
        <p>Being a product of the renowned Holidays by Jingle Holiday Bazar, which is an ``ISO`` certified travel company that has the record of being the leading travel & tours company in the B2B sector, Travkart is a name that breeds trust. A 24*7 emergency and crisis support system and complete transparency regarding pricing, policy and procedures make Jingle Holiday Bazar a trusted name for safe & easy travel around the world</p>
      </div>
     </div>
    {/* ----------------------------------------------------------abouts card-------------------------------------------------- */}

    <div className="row justify-content-center mt-4" data-aos='zoom-in-up'>
      <div className="col-md-3" id='a-card-heading'>
              <div className="card">
            <div className="image">
              <img src={card36}  alt='' className='img-fluid'/>
            </div>
            <div className="details">
              <div className="center">
                <h1>Chandan Molhotra <br /></h1>
                <p>Professionalism, Quality, Responsiveness, value.</p>
                <ul>
                  <li><Link to="#"><i className="bi bi-facebook"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-twitter"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-linkedin"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-google"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>


      </div>

      <div className="col-md-3" id='a-card-heading'>
      <div className="card">
            <div className="image">
              <img src={card37} alt='' className='img-fluid'/>
            </div>
            <div className="details">
              <div className="center">
                <h1>Sandeep koli <br /><span>team leader</span></h1>
                <p>Professionalism, Quality, Responsiveness, value..</p>
                <ul>
                  <li><Link to="#"><i className="bi bi-facebook"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-twitter"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-linkedin"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-google"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>

      </div>
      <div className="col-md-3" id='a-card-heading'>
      <div className="card">
            <div className="image">
              <img src={card38}  alt='' className='img-fluid'/>
            </div>
            <div className="details">
              <div className="center">
                <h1> Mukesh Kumar Jaiswal<br /><span>team leader</span></h1>
                <p>Professionalism, Quality, Responsiveness, value.</p>
                <ul>
                  <li><Link to="#"><i className="bi bi-facebook"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-twitter"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-linkedin"></i></Link></li>
                  <li><Link to="#"><i className="bi bi-google"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>

      </div>



    </div>
 
  </div>



</div>
  )
}

export default About;