import React from 'react'
import'./Maldives.css' 
import cardMD81 from "../images/cardMD81.jpg"
import cardMD82 from "../images/cardMD82.jpg"
import cardMD83 from "../images/cardMD83.jpg"
import cardMD84 from "../images/cardMD84.jpg"
import cardMD85 from "../images/cardMD85.jpg"
import cardMD from "../images/cardMD.jpg"

const Maldives = () => {
  return (
    <div>

<div className="c-images" >
        <img src={cardMD} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
      </div>

        <div className="container-fluid">

             <div className='row justify-content-center mt-3'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                         Perfect Time To Visit Maldives 
                    </h2>
                    <p>Discover the wonders of the Maldives, a tropical paradise offering stunning sights and pristine waters! Jingle Holiday Bazar welcomes you to an unforgettable sightseeing experience. Delight in the vibrant coral reefs as you snorkel or dive into the mesmerizing underwater world. Be amazed by the colorful marine life, from playful dolphins to majestic sea turtles. Stroll along soft, sandy beaches, where gentle turquoise waves caress the shore. Soak up the warm sun and take a refreshing dip in the inviting ocean. Immerse yourself in the rich Maldivian culture by visiting local islands. Unearth traditional handicrafts and savor delectable local cuisine. Embark on an extraordinary adventure by hopping on a boat and sailing through picturesque atolls. Witness breathtaking sunsets that paint the sky in mesmerizing hues. Relax and rejuvenate at luxurious resorts, surrounded by lush greenery and tranquil lagoons. Indulge in spa treatments to enhance your island experience. With Jingle Holiday Bazar, your Maldives sightseeing journey will be filled with joy, laughter, and cherished memories. Book now for your dreamy island getaway!</p>
                </div>
             </div>







            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box' data-aos='fade-right'>
                    <div className="image">
                        <img src={cardMD81} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Island Tour</h3>
                        
                        <p>Island hopping is an excellent way to explore multiple islands in one trip. It's an opportunity to witness stunning landscapes, crystal-clear waters, and unique wildlife such as sea turtles and dolphins. Remember to pack your snorkel gear to explore the vibrant coral reefs. Each island has its own charm and culture, making it an unforgettable adventure.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardMD82} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Relaxing On The Beaches</h3>
                        <p>Beaches are a popular spot for both tourists and locals to unwind and enjoy the natural beauty. With miles of pristine coastline, visitors can indulge in activities like swimming, sunbathing, and leisurely walks. Some beaches also provide picturesque views of nearby islands or historic landmarks, making them ideal for sightseeing while relishing the sand and sea breeze.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='fade-right'>
                    <div className="image">
                        <img src={cardMD83} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Water Sports Tour</h3>
                        <p>This destination offers a variety of water sports activities, such as snorkeling, scuba diving, surfing, kayaking, and windsurfing, which are great ways to have fun in the water. The water is clear and there is an abundance of colorful marine life to observe. Besides aquatic activities, visitors can explore the local culture, go sightseeing, and enjoy the beautiful beaches and resorts.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardMD84} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Maldives Culture Tour</h3>
                        <p>The Maldives has a distinct culture influenced by its geography and Islamic beliefs. Tourists can attend cultural events to experience traditional music and dance performances such as boduberu drumming and thaa and langiri songs. Additionally, historical sites like the Hukuru Miskiy mosque are worth visiting. The country's beautiful beaches and underwater life make it an ideal location for snorkeling and diving.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='zoom-in'>
                    <div className="image">
                        <img src={cardMD85} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                       <h3>Sunset Curises Tour</h3>
                        
                        <p>Watching the sunset on a cruise in the Maldives is an experience that you should not miss. The view of the sun going down and the sky painted with a mix of orange and pink colors is simply breathtaking. You might even get the chance to spot dolphins and other marine animals while on the trip, making it a truly unforgettable sightseeing adventure that you will cherish.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                
                

            </div>

        </div>






    </div>
  )
}

export default Maldives;