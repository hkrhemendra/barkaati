
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import './assets/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/icofont.min.css'
import './assets/css/lightcase.css'
import './assets/css/swiper.min.css'
import './assets/css/style.css'

import AboutUs from './Components/pages/AboutUs';
import Audio from "./Components/pages/Audio";
import Blogs from './Components/pages/Blogs';
import Contact from './Components/pages/Contact';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import Home from './Components/pages/Home';
import Gallery from "./Components/pages/Gallery";
import Users from "./Components/pages/Users";


function App() {


  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/audio' element={<Audio/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
