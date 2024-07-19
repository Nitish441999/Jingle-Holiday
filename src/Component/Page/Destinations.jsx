import React from 'react'
import'./Destinations.css';
import card8 from "../images/card8.jpg"
import card9 from "../images/card9.jpg"
import card10 from "../images/card10.jpg"
import card11 from "../images/card11.jpg"
import card12 from "../images/card12.jpg"
import card14 from "../images/card14.jpg"
import card15 from "../images/card15.jpg"
import card16 from "../images/card16.jpg"
import card17 from "../images/card17.jpg"
import card18 from "../images/card18.jpg"


const Destinations = () => {
  return (
    <div>
         <div className="c-images" >
           <img src={card12} alt=""  className='img-fluid' style={{width:"100%" , height:"700px"}}/>
        </div>

        <div className="container-fluid">

             {/* /---------------------------------------------------------------popular distination in india--------------------------------- */}


      <div className="row justify-content-center mt-5">
            <div className="col-md-12" id='heading'>
            <h2><span>POPULAR DESTINATION IN INDIA</span></h2>
            <h4>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. <br />
                The world's seventh largest nation by area and the second largest in terms of population, <br /> India boasts a  rich
                heritage that's the result of centuries of different cultures and religions leaving their mark </h4>
            </div>
      </div>

      
        <div className="row justify-content-center mt-2">
          <div className="col-md-3" id='india-popu'>
             <div className="india-image-3" data-aos='fade-right'>
              <img src={card10} alt=""  className='img-fluid'/>
              <h3>PUNJAB</h3>
              </div>
              <div className="india-image-3" data-aos='fade-right'>
              <img src={card9} alt=""  className='img-fluid'/>
              <h3>DELHI</h3>
              </div>
          </div>

          <div className="col-md-4 india-mdl" id='india-popu' data-aos='zoom-in-up'>
                <div className='india-mdl'>
                <img src={card8} alt=""  className='img-fluid'  />
                    <h3>AGARA</h3>

                </div>
           
            </div>


          <div className="col-md-3" id='india-popu' >
                <div className="india-image-3"data-aos='fade-left'>
                <img src={card11} alt=""  className='img-fluid'/>
                <h3> NEW DELHI</h3>
                </div>
                <div className="india-image-3"data-aos='fade-left'>
                <img src={card12} alt=""  className='img-fluid'/>
                <h3>AYODHYA</h3>    
                </div>      
          </div>

        </div>


        {/* ---------------------------------------------------popular destination of international------------------------------------- */}

               <div className="row justify-content-center mt-5">
                    <div className="col-md-12" id='heading'>
                        <h2><span>POPULAR DESTINATION INTERNATIONAL</span></h2>
                        <h4>Mother Earth along with mankind have co-created some of the most spectacular places on this <br />
                        planet.From sprawling cities to spectacular national parks, it is hard to keep your bucket list <br />
                        stagnant. Keeping in mind iconic attractions, culture, food and ease of travel, these are the best <br />
                        places in the world to visit! </h4>
                    </div>
              </div>

      
                <div className="row justify-content-center mt-2">
                <div className="col-md-3" id='india-popu' >
                    <div className="india-image-3" data-aos='fade-right'>
                    <img src={card14} alt=""  className='img-fluid'/>
                    <h3>NEW YORK</h3>
                    </div>
                    <div className="india-image-3" data-aos='fade-right'>
                    <img src={card15} alt=""  className='img-fluid'/>
                    <h3>SINGAPORE</h3>
                    </div>
                </div>

          <div className="col-md-4 india-mdl" id='india-popu'data-aos='zoom-in-up'>
                <div className='india-mdl'>
                   <img src={card16} alt=""  className='img-fluid'/> 
                    <h3>DUBAI</h3>

                </div>
           
            </div>


          <div className="col-md-3" id='india-popu' >
                <div className="india-image-3" data-aos='fade-left'>
                    <img src={card17} alt=""  className='img-fluid'/>
                    <h3> SYDNEY</h3>
                </div>
                <div className="india-image-3" data-aos='fade-left'>
                    <img src={card18} alt=""  className='img-fluid'/>
                    <h3>MALESHIYA</h3>    
                </div>      
          </div>


        </div>




        </div>




    </div>
  )
}

export default Destinations;