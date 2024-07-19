import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

                    <div className='container-fluid'>
                        <div className='row mt-5' id='footer-top'>
                            <div className="col-md-6"id='footer-top-1'>
                                <p>Get connected us on social network</p>
                            </div>
                            <div className="col-md-6" id='footer-top-2'>
                           
                           <Link to={"/"}> <i class="bi bi-facebook"></i></Link>
                            <Link to={"/"}> <i class="bi bi-instagram"></i></Link>
                            <Link to={"/"}>  <i class="bi bi-twitter"></i></Link>
                            <Link to={"/"}> <i class="bi bi-google"></i></Link>
                            <Link to={"/"}>  <i class="bi bi-linkedin"></i></Link>
                            <Link to={"/"}>  <i class="bi bi-envelope-fill"></i></Link>

                            </div>
                        </div>


                        <div className='row' id='footer-md-sec'>
                            <div className="col-md-3 comp-name"id='footer-com'>
                                <h4>Jingle holiday bazar</h4>
                                <p>Travel with us from here to any where...</p>
                                <li> Phone: +91 8506922777 <br /> <span style={{marginLeft:"18%"}}>+91 8506944777</span></li>
                                <li>Email: jingleholidaybazar@gmail.com</li>
                                <li>24/7 Dedicated Customer Support</li>

                            
                            </div>
                            <div className="col-md-3" id='footer-com'>
                            <ul className='footer-md'>
                                <h4>Domestic Packages</h4>
                                <li> <i class="bi bi-caret-right-fill"></i><Link to="/">Uttarakhand</Link></li>
                                <li> <i class="bi bi-caret-right-fill"></i><Link to="/">Mumbai</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Ladakh</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i> <Link to="/">Meghalaya</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">North East India</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i> <Link to="/">Rajasthan</Link></li>
                            </ul>
                            </div>
                            <div className="col-md-3" id='footer-com'>
                            <ul className='footer-md'>
                                <h4>International Packages</h4>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Maldives</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Singapore</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Switzerland</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Saudi Arabai</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Thailand</Link></li>
                                <li><i class="bi bi-caret-right-fill"></i><Link to="/">Dubai</Link></li>
                            </ul>
                            </div>
                            <div className="col-md-3" id='footer-com'>
                                    <ul className='footer-md'>
                                    <h4>Yatra</h4>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">Mata vaishno </Link></li>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">Kedarnath</Link></li>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">Badrinath</Link></li>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">Char Dham Yatra</Link></li>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">Ramayana Yatra</Link></li>
                                    <li><i class="bi bi-caret-right-fill"></i><Link to="/">9 Devi Yatra</Link></li>
                                    </ul>
                            </div>
                        </div>

                        
                        <div className="row justify content-center" style={{background:"#9e9e9e", padding:"20px"}}>
                            <div className="col-md-12" style={{textAlign:'center' }}>
                            <p>Powered By | <Link to="/" style={{textDecoration:"none"}}>Namrata Universal</Link> | All Rights are Reserved by Jingleholidaybazar</p>

                            </div>
                        </div>
                    </div>



    </div>
  )
}

export default Footer