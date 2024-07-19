import React from 'react'
import'./Iceland.css' 
import cardI68 from "../images/cardI68.jpg"
import cardI69 from "../images/cardI69.jpg"
import cardI70 from "../images/cardI70.jpg"
import cardI71 from "../images/cardI71.jpg"
import cardI72 from "../images/cardI72.jpg"
import cardI73 from "../images/cardI73.jpg"
import cardI from "../images/cardI.jpg"

const Iceland = () => {
  return (
    <div>
        <div className="c-images" >
        <img src={cardI} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
      </div>

        <div className="container-fluid">

             <div className='row justify-content-center mt-3'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                         Perfect Time To Visit Iceland 
                    </h2>
                    <p>Immerse yourself in the breathtaking beauty of Iceland with Jingle Holiday Bazar! Prepare for an extraordinary journey through this enchanting wonderland. Witness the captivating Northern Lights illuminating the night sky with a magical dance of vibrant colors. Experience the sheer awe of powerful geysers erupting in mesmerizing displays, showcasing the wonders of nature. Unwind at the world-famous Blue Lagoon, a natural geothermal spa, where you can soak in warm, mineral-rich waters surrounded by stunning volcanic landscapes. Explore lush green valleys, picturesque waterfalls, and majestic glaciers, capturing every moment like a picture-perfect memory. Delve into Iceland's unique culture, savoring the delightful local cuisine, and mingling with the warm and friendly locals. Our knowledgeable guides will ensure a safe and enjoyable journey, sharing captivating stories about Iceland's history and folklore. Don't miss this extraordinary opportunity to experience the wonders of Iceland with Jingle Holiday Bazar. Whether you're a nature enthusiast or an adventure seeker, this is your perfect getaway. Let us turn your dream Iceland vacation into a reality!</p>
                </div>
             </div>






            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box' data-aos="fade-right">
                    <div className="image">
                        <img src={cardI68} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Reykjavik Tour</h3>
                        
                        <p>Reykjavik is the capital of Iceland and offers plenty of attractions for tourists. One must-see spot is Hallgrimskirkja, a unique church that provides stunning views of the city. Another recommendation is strolling down Laugavegur, the city's main shopping street. Visitors should also make sure to visit Harpa, a beautiful concert hall and conference center. Additionally, the sculptures of Sun Voyager and the historic settlement of Perlan are not to be missed.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos="fade-left">
                    <div className="image">
                        <img src={cardI69} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Golden Circle Tour</h3>
                        <p>The Golden Circle is a popular 300-kilometer tour route in Iceland that features three main attractions: Þingvellir National Park, the Geysir Geothermal Area, and Gullfoss waterfall. These natural wonders offer a glimpse into Iceland's unique landscape and geology. Visitors can explore the Golden Circle through organized tours or self-driving.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box' data-aos="fade-right">
                    <div className="image">
                        <img src={cardI70} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Jokulsarlon Glacier Lagoon</h3>
                        <p>Jokulsarlon Glacier Lagoon is a stunning tourist spot located in southeastern Iceland. The lagoon is filled with icebergs that have broken off from the nearby Breiðamerkurjökull glacier, creating a breathtaking landscape. Tourists can take a boat tour to observe the icebergs up close, go hiking in the surrounding area, or simply appreciate the amazing natural beauty of the glacier lagoon.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box' data-aos="fade-left">
                    <div className="image">
                        <img src={cardI71} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Blue Lagoon Tour</h3>
                        <p>The Blue Lagoon is a unique geothermal spa located in Iceland, renowned for its stunning crystal clear blue waters that are rich in minerals and have therapeutic properties. Visitors can relax and soak in the warm water while surrounded by a rugged volcanic landscape. This popular destination is a must-visit when traveling to Iceland and provides an unforgettable experience.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos="fade-right">
                    <div className="image">
                        <img src={cardI72} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                       <h3>Akureyri Tour</h3>
                        
                        <p>Akureyri is a charming town located in the northern part of Iceland that is renowned for its stunning natural beauty and vibrant culture. One of the main attractions in the area is the Vatnajökull National Park, which features glaciers, waterfalls, and geothermal hot springs. Sightseeing in this region provides an excellent opportunity to experience Iceland's breathtaking landscapes and unique geological features.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos="fade-left">
                    <div className="image">
                        <img src={cardI73} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Westfjords Tour</h3>
                        <p>The Westfjords region in Iceland is a breathtaking destination that offers visitors a chance to experience the incredible beauty of nature. Among the must-see attractions are the stunning Dynjandi waterfall, the picturesque village of Ísafjörður, and the unique red sand beach of Rauðasandur. In addition to sightseeing, visitors can also enjoy hiking, observing wildlife, and unwinding in natural hot springs.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>

        </div>






    </div>
  )
}

export default Iceland