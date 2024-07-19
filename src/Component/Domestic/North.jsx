import React from 'react'
import"./Domestic.css"
import cardN1 from "../images/cardN1.jpg"
import cardN2 from "../images/CardN2.jpg"
import cardN3 from "../images/cardN3.jpg"
import cardN4 from "../images/cardN4.jpg"
import cardN5 from "../images/cardN5.jpg"
import cardN6 from "../images/cardN6.jpg"
import cardN7 from "../images/cardN7.jpg"
import cardN8 from "../images/cardN8.jpg"
import cardNT from"../images/cardNT.jpg"

const North = () => {
  return (
    <div>
        <div className="c-images" >
           <img src={cardNT} alt=""  className='img-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>

        <div className="container-fluid">
            
            <div className='row justify-content-center mt-4'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                    NORTH INDIA GALLERY
                    </h2>
                    <p>North India is like a set of thali that has every desirable element to satisfy your taste buds. From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. From the purest symbol of love, Taj Mahal to the holiest of all rivers, the Ganges. North India is a treasure trove of vast nature, authentic culture and an array of experiences filled with serenity. Exceptionally blessed with a diverse landscape, it has a rich cultural heritage that leaves you overwhelmed. North India comprises Jammu & Kashmir, Delhi, Uttar Pradesh, Haryana, Punjab, Rajasthan, Himachal Pradesh and Uttarakhand.</p>
                </div>
            </div>

    
            



        
            <div className="row justify-content-center mt-3">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN1} alt=""  className='img-fluid'/>
                    <h6>New Delhi</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN2} alt=""  className='img-fluid'/>
                    <h6>Shimla</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN3} alt=""  className='img-fluid'/>
                    <h6>Agra</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN4} alt=""  className='img-fluid'/>
                    <h6>Kullu and Manali</h6>
                    <button type='button'>More</button>

                </div>
            </div>



            <div className="row justify-content-center mt-3">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN5} alt=""  className='img-fluid'/>
                    <h6>Mussoori and Dehradun</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN6} alt=""  className='img-fluid'/>
                    <h6>Dalhousie</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN7} alt=""  className='img-fluid'/>
                    <h6>Jim Corbett National Park</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardN8} alt=""  className='img-fluid'/>
                    <h6>Amritsar</h6>
                    <button type='button'>More</button>
                </div>
            </div>



        </div>

    </div>
  )
}

export default North;