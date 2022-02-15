import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Locations from './components/Locations';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Specialevents from './components/Specialevents';

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
          <Route path='/Specialevents' element={<Specialevents/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;

