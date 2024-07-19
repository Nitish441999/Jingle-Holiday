import React from 'react'
import"./Domestic.css"
import southS1 from "../images/southS1.jpg"
import southS2 from "../images/southS2.jpg"
import southS3 from "../images/southS3.jpg"
import southS4 from "../images/southS4.jpg"
import southS5 from "../images/southS5.jpg"
import southS6 from "../images/southS6.jpg"
import southS7 from "../images/southS7.jpg"
import southS8 from "../images/southS8.jpg"

const South = () => {
  return (
    <div>
    <div className="c-images" >
       <img src={southS1} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
    </div>

    <div className="container-fluid">
        
        <div className='row justify-content-center mt-4'>
            <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                <h2 >
                     SOUTH INDIA GALLERY
                </h2>
                <p>South India has a lot more to offer than mere beaches and spice plantations. It’s a melting pot of cultures, cuisines, traditions, and languages. From honeymooning couples to families, the southern states of Kerala, Karnataka, Andhra Pradesh, and Tamil Nadu welcome tourists with warmth and love. There’s something to do for everyone here – water sports for the adventurous, backwaters for the romantics, trekking trails for hikers, and panoramic vistas for nature lovers. Read ahead to know about the top places to visit in South India</p>
            </div>
        </div>


    
        <div className="row justify-content-center mt-3">
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS1} alt=""  className='img-fluid'/>
                <h6>Bangalore</h6>
                <button type='button'>More</button>

            </div>
            
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS2} alt=""  className='img-fluid'/>
                <h6>Coorg</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS3} alt=""  className='img-fluid'/>
                <h6>Chennai</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS4} alt=""  className='img-fluid'/>
                <h6>Gokarna</h6>
                <button type='button'>More</button>

            </div>
        </div>



        <div className="row justify-content-center mt-3">
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS5} alt=""  className='img-fluid'/>
                <h6>Hampi</h6>
                <button type='button'>More</button>

            </div>
            
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS6} alt=""  className='img-fluid'/>
                <h6>Pondicherry</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS7} alt=""  className='img-fluid'/>
                <h6>Kerla (Munnar)</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                <img src={southS8} alt=""  className='img-fluid'/>
                <h6>Kanyakumari
                </h6>
                <button type='button'>More</button>
            </div>
        </div>



    </div>

</div>
  )
}

export default South;