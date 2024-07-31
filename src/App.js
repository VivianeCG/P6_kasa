import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Page404 from './Pages/Page404';
import RentalInfos from './Pages/RentalInfos'
import Header from './Components/Header';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Page404' element={<Page404/>}/>
          <Route path='/RentalInfos' element={<RentalInfos/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
