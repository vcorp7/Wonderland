import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Home from './components/Home';
import Locations from './components/Locations';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/Locations' element={<Locations/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>

  );
}

export default App;

