import React from 'react'

import card22 from"../images/card22.jpg";
import card23 from "../images/card23.jpg"
import card24 from "../images/card24.jpg"
import card25 from "../images/card25.jpg"
import card26 from "../images/card26.jpg"
import card27 from "../images/card27.jpg"
import card28 from "../images/card28.jpg"
import card29 from "../images/card29.jpg"

const Gallery = () => {
  return (
    <div>
        <div className="c-images" >
           <img src={card22} alt=""  className='img-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>


        <div className="container-fluid">

        <div className="row justify-content-center mt-5">
            <div className="col-md-12" id='heading'>
                <h2><span>Gallery</span></h2>
                <h4>At Jingle Holiday Bazar All Over India Destination Gallery</h4>
            </div>
      </div>
        



      
        <div className="row justify-content-center mt-2">
            <div className="col-md-2" id='gallery-box'data-aos='fade-right'>
                <img src={card22} alt=""  className='img-fluid'/>
                <h6>New Delhi</h6>
                <button type='button'>More</button>

            </div>
            
            <div className="col-md-2" id='gallery-box'data-aos='fade-right'>
                <img src={card23} alt=""  className='img-fluid'/>
                <h6>Shimla</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='fade-right'>
                <img src={card24} alt=""  className='img-fluid'/>
                <h6>Agra</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='fade-right'>
                <img src={card25} alt=""  className='img-fluid'/>
                <h6>Kullu and Manali</h6>
                <button type='button'>More</button>

            </div>
        </div>



        <div className="row justify-content-center mt-4">
            <div className="col-md-2" id='gallery-box'data-aos='fade-left'>
                <img src={card26} alt=""  className='img-fluid'/>
                <h6>Mussoori and Dehradun</h6>
                <button type='button'>More</button>

            </div>
            
            <div className="col-md-2" id='gallery-box'data-aos='fade-left'>
                <img src={card27} alt=""  className='img-fluid'/>
                <h6>Dalhousie</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='fade-left'>
                <img src={card28} alt=""  className='img-fluid'/>
                <h6>Jim Corbett National Park</h6>
                <button type='button'>More</button>

            </div>
            <div className="col-md-2" id='gallery-box'data-aos='fade-left'>
                <img src={card29} alt=""  className='img-fluid'/>
                <h6>Amritsar</h6>
                <button type='button'>More</button>
            </div>
        </div>

        </div>


    </div>
  )
}

export default Gallery;