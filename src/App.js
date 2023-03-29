
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './components/Home/Home';
import News from './components/News/News';
import Aboutus from './components/Aboutus/Aboutus';
import Study from './components/Study/Study';
import Tips from './components/Tips/Tips';
import Gallery from './components/Gallery/Gallery';
import Footer from './Footer/Footer';
import Article from './components/Article/Article';

function App() {
  return (
    <BrowserRouter>
      <Navbar classname="navbar"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/News" element={<News/>} />
            <Route path='/Study' element={<Study/>}/>
            <Route path='/Tips' element={<Tips/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/News/1' element={<Article/>}/>

          </Routes>
          <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
