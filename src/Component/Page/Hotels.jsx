import React from 'react'
import './Hotels';
import card31 from "../images/card31.jpg"
import card32 from "../images/card32.jpg"
import card33 from "../images/card33.jpg"
import card34 from "../images/card34.jpg"
import { Link } from 'react-router-dom';

const Hotels = () => {
  return (
    <div>

<div className="c-images" >
           <img src={card31} alt=""  className='img-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>


        <div className="container-fluid">

        <div className="row justify-content-center mt-5">
        <div className="col-md-12" id='heading'>
          <h2><span>POPULAR HOTELS</span></h2>
          <h4>At Jingle Holiday Bazar Brovide Best Hotel facilty National And International </h4>
        </div>
      </div>
    







        <div className="row justify-content-center mt-2"id='feature-row'>
            <div className="col-md-5 " id='feature-col'>

                <div className='feature-box' id='img-radius-1'data-aos='zoom-in-up'>
                <img src={card31} alt=""  className='img-fluid'/>
                    <div className='feature-text' id='text-radius-1'>
                        <Link href=""><h3>Taj Aravali Resort & Spa</h3></Link>
                        <p>Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at <span>₹ 12999+</span> per night</p>
                        <button type='button'>CONTACT</button>
                    </div>
                </div>
                <div className='feature-box'id='img-radius-2' data-aos='zoom-in-up'>
                   <img src={card32} alt=""  className='img-fluid'/>
                    <div className='feature-text' id='text-radius-2'>
                      <Link href=""><h3>Hotel Mountain face by Snow City Hotels</h3></Link>
                      <p>Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden. <span>₹ 1,440+</span> per night</p>
                      <button type='button'>CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="col-md-5 " id='feature-col'>

                <div className='feature-box' id='img-radius-3'data-aos='zoom-in-up'>
                      <img src={card33} alt=""  className='img-fluid'/>
                       <div className='feature-text' id='text-radius-3' >
                          <Link href=""><h3>Hideout Premiere</h3></Link>
                          <p>Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches <span> ₹ 4499+</span></p>
                          <button type='button'>CONTACT</button>
                       </div>
                </div>
                <div className='feature-box' id='img-radius-4' data-aos='zoom-in-up'>
                      <img src={card34} alt=""  className='img-fluid'/>
                        <div className='feature-text' id='text-radius-4'>
                            <Link href=""><h3>Taj Mahal Palace Hotel</h3></Link>
                            <p>The Taj Mahal Palace is a heritage, five-star, luxury hotel in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India</p>
                            <button type='button'>CONTACT</button>
                       </div>
                </div>
            </div>
               
        </div>



        </div>


    </div>
  )
}

export default Hotels