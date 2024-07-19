import React from 'react'
import'./Belgium.css' 
import cardB48 from "../images/cardB48.jpg"
import cardB49 from "../images/cardB49.jpg"
import cardB50 from "../images/cardB50.jpg"
import cardB51 from "../images/cardB51.jpg"
import cardB52 from "../images/cardB52.jpg"
import cardB53 from "../images/cardB53.jpg"

const Belgium = () => {
  return (
    <div>

<div className="c-images" >
        <img src={cardB53} alt=""  className='i mg-fluid' style={{width:"100%" , height:"700px"}}/>
      </div>




        <div className="container-fluid">

             <div className='row justify-content-center mt-3'>
                <div className='col-md-10' id='T-heading' data-aos='zoom-in'>
                    <h2 >
                         Perfect Time To Visit Belgium
                    </h2>
                    <p>Experience the enchanting sights of Belgium, a delightful holiday bazar! Begin in Brussels, the capital city, where you'll be amazed by the iconic Atomium and the majestic Royal Palace. Don't forget to treat yourself to the famous Belgian waffles and chocolates! Next, head to Bruges, a fairytale-like town with charming canals and medieval buildings. Enjoy a serene boat ride and soak in the scenic beauty. Ghent, another treasure, blends history and modernity. Explore the impressive Gravensteen Castle and the lively street art scene. In Antwerp, a shopper's paradise, admire the grand Cathedral of Our Lady and indulge in the world of fashion and diamonds. Nature lovers will be thrilled in Ardennes, a lush region offering forests and exciting outdoor activities. End your journey in picturesque Dinant, renowned for its cliffs and association with the saxophone. Belgium's diverse attractions promise an unforgettable adventure, creating cherished memories of your jingle holiday bazar!</p>
                </div>
             </div>




            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box' data-aos='fade-right'>
                    <div className="image">
                        <img src={cardB48} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Brussels Tour</h3>
                        
                        <p>Brussels, the capital of Belgium, offers many sightseeing opportunities. Tour the iconic Atomium, a one-of-a-kind building designed to resemble an atom. Explore the historical Grand Place, recognized as a UNESCO World Heritage site, and admire the breathtaking architecture. Take a leisurely stroll through the charming streets of the Marolles neighborhood, or stop by the renowned Manneken Pis statue.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardB49} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Bruges Tour</h3>
                        <p>Bruges is a beautiful city in Belgium that offers visitors many sightseeing opportunities. You can explore the famous Belfry tower, take a boat tour along the picturesque canals, visit the Markt square and Gothic-style City Hall, admire the artwork on display at the Groeningemuseum, and indulge in delicious Belgian chocolate at one of the many local chocolatiers. There's plenty to do and see in Bruges!</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='fade-right'>
                    <div className="image">
                        <img src={cardB50} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Antwerp Tour</h3>
                        <p>Antwerp, located in Belgium, offers numerous fascinating tourist attractions to explore. Visitors can marvel at the stunning Cathedral of Our Lady and delve into the rich history of the Museum Plantin-Moretus. The Antwerp Zoo is a charming destination to observe various animals, while the lively Grote Markt square offers a vibrant atmosphere. Additionally, the city boasts a renowned diamond district and mouth-watering cuisine to indulge in.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                <div className="col-md-5" id='cardT-box'data-aos='fade-left'>
                    <div className="image">
                        <img src={cardB51} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                        <h3>Ypres Tour</h3>
                        <p>Ypres is a well-known tourist spot in Belgium's Flemish region. The city boasts rich history and stunning architecture, offering visitors the chance to explore World War I battlefields, monuments, the Menin Gate Memorial, the In Flanders Fields Museum, and the Gothic-style Saint Martin's Cathedral. There are also charming cafes and restaurants to enjoy while taking in the sights.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
                

            </div>



            <div className="row justify-content-center mt-4">
                <div className="col-md-5" id='cardT-box'data-aos='zoom-in'>
                    <div className="image">
                        <img src={cardB52} alt=""  className='img-fluid'/>
                    </div>
                    <div className="text">
                       <h3>Dinant Tour</h3>
                        
                        <p>Dinant is a charming town located in Belgium that sits on the banks of the Meuse River. This town is renowned for its stunning architecture, impressive citadel, and rich history. Tourists must not miss visiting some of its iconic landmarks such as the Collegiate Church of Notre-Dame, the Saxophone Museum, the Maison Leffe Brewery, and the Cave La Merveilleuse.</p>
                        <button type='button'>Red blogs</button><span><button type='button'>Contact</button></span>
                    </div>

                </div>
               
                

            </div>

        </div>





    </div>
  )
}

export default Belgium;