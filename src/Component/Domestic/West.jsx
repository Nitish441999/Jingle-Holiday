import React from 'react'
import"./Domestic.css"
import cardw1 from "../images/cardw1.jpg"
import cardW2 from "../images/cardW2.jpg"
import cardW3 from "../images/cardW3.jpg"
import cardW4 from "../images/cardW4.jpg"
import cardW5 from "../images/cardW5.jpg"
import cardW6 from "../images/cardW6.jpg"
import cardW7 from "../images/cardW7.jpg"
import cardW8 from "../images/cardW8.jpg"

const West = () => {
  return (
    <div>
        <div className="c-images" >
            <img src={cardw1} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>

        <div className="container-fluid">
            
            <div className='row justify-content-center mt-4'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                        WEST INDIA GALLERY
                    </h2>
                    <p>West India has an amazing potpourri of rich culture, heritage, and vivid greenery of the Ghats that make it a perfect destination for tourists. Tourists love the amazing places to visit in West India and it becomes a promising region for its temperate climate and beautiful locations. Also during the summer months, the hill stations of Western India have a number of colorful festivals that attract tourists.</p>
                </div>
            </div>


        
            <div className="row justify-content-center mt-3">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardw1} alt=""  className='img-fluid'/>
                    <h6>Goa</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW2} alt=""  className='img-fluid'/>
                    <h6>Mumbai</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW3} alt=""  className='img-fluid'/>
                    <h6>Mahabaleshwar</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW4} alt=""  className='img-fluid'/>
                    <h6>Panchgani</h6>
                    <button type='button'>More</button>

                </div>
            </div>



            <div className="row justify-content-center mt-5">
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW5} alt=""  className='img-fluid'/>
                    <h6>Khandala</h6>
                    <button type='button'>More</button>

                </div>
                
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW6} alt=""  className='img-fluid'/>
                    <h6>Lonavla</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW7} alt=""  className='img-fluid'/>
                    <h6>Dandeli National Park</h6>
                    <button type='button'>More</button>

                </div>
                <div className="col-md-2" id='gallery-box'data-aos='zoom-in'>
                    <img src={cardW8} alt=""  className='img-fluid'/>
                    <h6>Shirdi
                    </h6>
                    <button type='button'>More</button>
                </div>
            </div>



        </div>

</div>
  )
}

export default West