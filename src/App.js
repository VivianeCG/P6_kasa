import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Error from './Pages/Error.js';
import RentalInfos from './Pages/RentalInfos.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/RentalInfos" element={<RentalInfos/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
