import React from 'react'
import'./Canada.css' 
import cardC54 from "../images/cardC54.jpg"
import cardC55 from "../images/cardC55.jpg"
import cardC56 from "../images/cardC56.jpg"
import cardC57 from "../images/cardC57.jpg"
import cardC58 from "../images/cardC58.jpg"
import cardC59 from "../images/cardC59.jpg"
import cardC60 from "../images/cardC60.jpg"

const Canada = () => {
  return (
    <div>

<div className="c-images" >
        <img src={cardC60} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
      </div>

        <div className="container-fluid">

             <div className='row justify-content-center mt-3'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                         Perfect Time To Visit Canada 
                    </h2>
                    <p>Join us for an unforgettable Canada sightseeing adventure at the Jingle Holiday Bazaar! Experience the beauty of Canada's breathtaking landscapes and vibrant cities in a fun and festive way. Our expert guides will lead you to iconic landmarks like Niagara Falls, the Rocky Mountains, and Banff National Park. Immerse yourself in Canada's rich culture as you stroll through charming towns, meet friendly locals, and enjoy delicious Canadian treats. Make sure to explore the world-class museums and galleries in Toronto, Vancouver, and Montreal. At the Jingle Holiday Bazaar, you'll have the opportunity to shop for unique souvenirs, handmade crafts, and delightful gifts. Feel the holiday spirit with joyful carolers, twinkling lights, and festive decorations. Whether you're traveling with family or friends, this Canada sightseeing journey promises cherished memories. So, pack your bags and get ready for an enchanting holiday experience like no other!</p>
                </div>
             </div>





            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box' data-aos='fade-right'>
                    <div className="image">
                        <img src={cardC54} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Banff National Park Tour</h3>
                        
                        <p>Banff National Park is a stunning destination with plenty of natural beauty to admire. You can visit popular landmarks such as Lake Louise and Moraine Lake, take a scenic drive along the Icefields Parkway, hike to Johnston Canyon, or explore the charming town of Banff. Other attractions include the Banff Gondola and the hot springs at Banff Upper Hot Springs.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardC55} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Vancouver Tour</h3>
                        <p>Vancouver is a beautiful city located in western Canada, known for its scenic views and popular sightseeing spots like Stanley Park, Granville Island, Capilano Suspension Bridge, and the Vancouver Aquarium. Additionally, visitors can explore the city's diverse neighborhoods, including Gastown and Chinatown, and indulge in its vibrant food and cultural scenes. A stroll along the scenic seawall is also a must-do activity for anyone visiting Vancouver.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='fade-right'>
                    <div className="image">
                        <img src={cardC56} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Niagara Falls Tour</h3>
                        <p>Niagara Falls is a magnificent destination to explore situated on the Niagara River, marking the border between the United States and Canada. The falls consist of three distinct waterfalls, namely the Horseshoe Falls, the American Falls, and the Bridal Veil Falls. Tourists can admire the stunning views of the falls from observation points, embark on boat tours, and even experience the thrill of ziplining over the falls.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardC57} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Toronto Tour</h3>
                        <p>Toronto offers a variety of exciting sightseeing opportunities. You can take a leisurely stroll through the historic Distillery District, enjoy stunning views of the city from the iconic CN Tower, explore the exhibits at the Royal Ontario Museum, or unwind by the lake on the Toronto Islands. With so much to offer, there's something for everyone in Toronto!</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='fade-right'>
                    <div className="image">
                        <img src={cardC58} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                       <h3>Quebec City Tour</h3>
                        
                        <p>Quebec City is a historic and charming city that offers visitors a wide range of sightseeing opportunities. There are many popular attractions to explore, such as the iconic Chateau Frontenac and the picturesque Old Quebec district, which features cobblestone streets and quaint architecture. Additionally, visitors can visit the Citadelle of Quebec and enjoy the vast green space of the Plains of Abraham park. The city also boasts several museums, galleries, and local cuisine to try.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardC59} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Whistler Tour</h3>
                        <p>Whistler is a charming resort town located in the Coast Mountains of British Columbia, Canada. It is well-known for its breathtaking natural beauty and world-class skiing and snowboarding facilities during the winter season. Additionally, visitors can enjoy an array of outdoor activities such as hiking, mountain biking, and zip-lining during the summer months. The village is also bustling with numerous shops, restaurants, and nightlife options.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>

        </div>






    </div>
  )
}

export default Canada;