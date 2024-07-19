import React from 'react'
import"./Domestic.css"
import eastE1 from "../images/eastE1.jpg"
import eastE2 from "../images/eastE2.jpg"
import eastE3 from "../images/eastE3.jpg"
import eastE4 from "../images/eastE4.jpg"
import eastE5 from "../images/eastE5.jpg"
import eastE6 from "../images/eastE6.jpg"
import eastE7 from "../images/EastE7.jpg"
import eastE8 from "../images/eastE8.jpg"

const East = () => {
  return (
    <div>
        <div className="c-images" >
            <img src={eastE1} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>

        <div className="container-fluid">
            
            <div className='row justify-content-center mt-4'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                        EAST INDIA GALLERY
                    </h2>
                    <p>The Eastern Zone of India is rich in Cultural Heritage. You can have a taste of beaches, temples, monasteries, Buddhist circuits with a rural touch.The most popular tourist destinations for this region are, Calcutta, Former Capital of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling, etc</p>
                </div>
            </div>


        
            <div className="row justify-content-center mt-3">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE1} alt=""  className='img-fluid'/>
                    <h6>Kaziranga National Park</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE2} alt=""  className='img-fluid'/>
                    <h6>Tsomgo Lake</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE3} alt=""  className='img-fluid'/>
                    <h6>Ziro Valley</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE4} alt=""  className='img-fluid'/>
                    <h6>Goechala</h6>
                    <button type='button'>More</button>

                </div>
            </div>



            <div className="row justify-content-center mt-5">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE5} alt=""  className='img-fluid'/>
                    <h6>Cherrapunji and Mawsynram</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE6} alt=""  className='img-fluid'/>
                    <h6>Pelling</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE7} alt=""  className='img-fluid'/>
                    <h6>Gangtok</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={eastE8} alt=""  className='img-fluid'/>
                    <h6>Gorichen Peak
                    </h6>
                    <button type='button'>More</button>
                </div>
            </div>



        </div>

</div>
  )
}

export default East;