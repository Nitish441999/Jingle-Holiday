import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import card1 from "../images/card1.jpg"
import card4 from "../images/card4.jpg"
import card3 from "../images/card3.jpg"
import card5 from "../images/card-5.jpg"
import card6 from "../images/card6.jpg"
import card7 from "../images/card7.jpg"
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
import card19 from "../images/card19.jpg"
import card20 from "../images/card20.jpg"
import card21 from "../images/card21.jpg"
import card13 from "../images/card13.jpg"
import card22 from "../images/card22.jpg"
import card23 from "../images/card23.jpg"
import card24 from "../images/card24.jpg"
import card25 from "../images/card25.jpg"
import card26 from "../images/card26.jpg"
import card27 from "../images/card27.jpg"
import card28 from "../images/card28.jpg"
import card29 from "../images/card29.jpg"
import card31 from "../images/card31.jpg"
import card32 from "../images/card32.jpg"
import card33 from "../images/card33.jpg"
import card34 from "../images/card34.jpg"



const Home = () => {
  return (
    <div>

        <Carousel data-bs-theme="dark" style={{ width:"100%"}}>
            <Carousel.Item id='slide-card'>
                <img
                className="d-block w-100"
                src={card1}
                alt="First slide"
                />
                <div className="slide-text  ">
                    <h5 className='animate__animated animate__backInDown'>Welcome to Jingle Holiday Bazar</h5>
                    <button type='button'>Contact</button>
                </div>
            
            </Carousel.Item>
            <Carousel.Item id='slide-card'>
                <img
                className="d-block w-100"
                src={card4}
                alt="Second slide"
                />
                <div className="slide-text  ">
                <h5 className='animate__animated animate__backInDown'>Travel <span style={{color:'#FBB03B'}}>Around</span> The <span style={{color:'#FBB03B'}}>World</span>.</h5>
                    <p style={{color:'#63AB45', fontSize:'20px', fontWeight:'bold'}}>Explore the wonderful world with us.</p>
                    <button type='button'>Learn More</button>
                
                </div>
            
            </Carousel.Item>
            <Carousel.Item id='slide-card'>
                <img
                className="d-block w-100"
                src={card3}
                alt="Third slide"
                />
                <div className="slide-text  ">
                <h5 className='animate__animated animate__backInDown'>Let's Explore Your <span style={{color:'#63AB45'}}>Family</span> Trip.</h5>
                    <button type='button'>Explore</button>
                </div>
            
            </Carousel.Item>
            </Carousel>

    { /*----------------------------------------------------------------------------------------------*/ }
      
      <div className="container-fluid">
            <div className="row justify-contant-center">
                <div className="col-md-12 " id='heading'>
                    <h2><span>OUR SERVICE</span></h2>
                    <h4>At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip <br />
                    and every holidaybooking you make with us by bringing to you the best price deals; <br />
                    be it flights, tours or hotels. Our unique budget </h4>
                </div>
            </div>


            <div className="row justify-content-center mt-2 mb-5">
                <div className="col-md-3" id='service-box'>
                    <div className="card-heading">
                    <img src={card5} alt="" className='img-fluid'/>
                    <h2>Jingle Holiday Bazar Homestays</h2>   
                    </div>
                    <div className="card-text" >
                        <h4>Book Villas, Apartments and Resorts</h4>
                        <p>Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment,Jingle Holiday Bazar Homestays is the answer.Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places.</p>
                        <button type='button'>Contact</button>


                    </div>
                </div>
                <div className="col-md-3" id='service-box'>
                <div className="card-heading">
                    <img src={card6} alt="" className='img-fluid' />
                    <h2>Jingle Holiday Bazar Hotels</h2>   
                    </div>
                    <div className="card-text">
                        <h4>Book Hotels with Jingle Holiday Bazar.com</h4>
                        <p>We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays, travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping your anxieties at bay</p>
                        <button type='button'>Contact</button>


                    </div>
                
                </div>
                <div className="col-md-3" id='service-box'>
                    <div className="card-heading">
                    <img src={card7} alt=""  className='img-fluid'/>
                    <h2>Jingle Holiday Bazar flights</h2>   
                    </div>
                    <div className="card-text">
                        <h4>Why to book Flights Online with Jingle Holiday Bazar.com</h4>
                        <p>Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights. Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand. The entire activity of searching air connectivity between two cities, checking the schedule of the flight and zeroing in on one that's most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights.</p>
                        <button type='button'>Contact</button>


                    </div>
                </div>
            </div>

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



        {/* -----------------------------------------------FEATURED TOURS IN INDIA------------------------------------------ */}

        <div className="row justify-content-center mt-5">
        <div className="col-md-12" id='heading'>
          <h2><span>FEATURED TOURS IN INDIA</span></h2>
          <h4>India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. <br />The world's seventh
               largest tourist nation by area and the second largest in terms of population </h4>
        </div>
      </div>








        <div className="row justify-content-center mt-2"id='feature-row'>
            <div className="col-md-5 " id='feature-col'>

                <div className='feature-box' id='img-radius-1'data-aos='zoom-in-up'>
                   <img src={card19} alt=""  className='img-fluid'/>
                  <div className='feature-text' id='text-radius-1'>
                        <Link href=""><h3>Week At Beach in Goa</h3></Link>
                        <p>Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa</p>
                        <button type='button'>CONTACT</button>
                  </div>
                </div>
                <div className='feature-box'id='img-radius-2'data-aos='zoom-in-up'>
                    <img src={card20} alt=""  className='img-fluid'/>
                    <div className='feature-text' id='text-radius-2'>
                      <Link href=""><h3>Week At Thiksey Monastery</h3></Link>
                      <p>This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.</p>
                      <button type='button'>CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="col-md-5 " id='feature-col'>

              <div className='feature-box' id='img-radius-3'data-aos='zoom-in-up'>
                  <img src={card21} alt=""  className='img-fluid'/>
                       <div className='feature-text' id='text-radius-3' >
                          <Link href=""><h3>Week At Solang Valley, Manali</h3></Link>
                          <p>A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit</p>
                          <button type='button'>CONTACT</button>
                       </div>
              </div>
              <div className='feature-box' id='img-radius-4'data-aos='zoom-in-up'>
                  <img src={card13} alt=""  className='img-fluid'/>
                     <div className='feature-text' id='text-radius-4'>
                        <Link href=""><h3>Week At Kedarnath,Uttarkhand</h3></Link>
                        <p>Explore Kedarnath, a sacred Hindu pilgrimage site nestled in the Himalayas. Marvel at its ancient temple dedicated to Lord Shiva, surrounded by breathtaking natural beauty. Experience spiritual serenity and cultural richness in this divine destination.</p>
                        <button type='button'>CONTACT</button>
                     </div>
              </div>

            </div>
            
            
        </div>
        {/* -----------------------------------------------Gallery------------------------------------------ */}

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



        <div className="row justify-content-center mt-5">
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

        {/* -------------------------------------------------------------------------------------------------------------- */}
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

export default Home;