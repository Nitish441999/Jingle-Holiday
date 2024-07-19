import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Thailand from './Component/Thailand/Thailand';
import Belgium from './Component/Belgium/Belgium';
import Canada from './Component/Canada/Canada';
import Germany from './Component/Germany/Germany';
import Iceland from './Component/Iceland/Iceland';
import Malaysia from './Component/Malaysia/Malaysia';
import Maldives from './Component/Maldives/Maldives';
import Nepal from './Component/Nepal/Nepal';
import Singapur from './Component/Singapur/Singapur';
import Switzerland from './Component/Switzerland/Switzerland';
import East from './Component/Domestic/East';
import North from './Component/Domestic/North';
import West from './Component/Domestic/West';
import South from './Component/Domestic/South';
import Destinations from './Component/Page/Destinations';
import Gallery from './Component/Page/Gallery';
import Hotels from './Component/Page/Hotels';
import DomesticPackages from './Component/Package/DomesticPackages';
import InternationalPackages from './Component/Package/InternationalPackages';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
 <div style={{marginTop:"6rem"}}>


      <Routes>

      
        <Route path='/' element={<Home/>}/>
       
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/thailand' element={<Thailand/>}/>
        <Route path='/belgium' element={<Belgium/>}/>
        <Route path='/canada' element={<Canada/>}/>
        <Route path='/germany' element={<Germany/>}/>
        <Route path='/iceland' element={<Iceland/>}/>
        <Route path='/malaysia' element={<Malaysia/>}/>
        <Route path='/maldives' element={<Maldives/>}/>
        <Route path='/nepal' element={<Nepal/>}/>
        <Route path='/singapur' element={<Singapur/>}/>
        <Route path='/east' element={<East/>}/>
        <Route path='/switzerland' element={<Switzerland/>}/>
        <Route path='/north' element={<North/>}/>
        <Route path='/west' element={<West/>}/>
        <Route path='/south' element={<South/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/domesticpackage' element={<DomesticPackages/>}/>
        
        <Route path='/internationalpackages' element={<InternationalPackages/>}/>

        
      </Routes>  </div>
        

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
