import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import Footer from './component/footer/Footer';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import FaqPage from './pages/Faq/FaqPage';
import BlogPage from './pages/BlogPage/BlogPage';
import NosFournisseurs from './pages/NosFournisseurs/NosFournisseurs';
import ZonesIntervention from './pages/ZonesIntervention/ZonesIntervention';
import Client from './pages/Client/Client';
import NosRealisationPage from './pages/NosRealisationPage/NosRealisationPage';
import Professionelspage from './pages/Professionnels/Professionelspage';
import ParticularPage from './pages/Particular/ParticularPage';
import WhatsAppSticky from './component/WhatsAppSticky/WhatsAppSticky';

function App() {
  return (

    <>
    
    <div className="App">
    <Navbar/>
    <WhatsAppSticky />
    <Routes>
    <Route path='/' element={<MainPage />}/>
    <Route path='/Contact' element={<ContactPage />}/>
    <Route path='/Faq' element={<FaqPage />}/>
    <Route path='/Blog' element={<BlogPage />}/>
    <Route path='/NosFournisseurs' element={<NosFournisseurs />}/>
    <Route path='/ZonesIntervention' element={<ZonesIntervention />}/>
    <Route path='/client' element={<Client />}/>
    <Route path='/NosRealisationPage' element={<NosRealisationPage/>}/>
    <Route path='/Professionel' element={<Professionelspage/>}/>
    <Route path='/Particular' element={<ParticularPage/>}/>

    </Routes>
    <Footer />  
    </div>
   
    </>
   
  );
}

export default App;
