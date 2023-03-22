
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './components/Home/Home';
import News from './components/News/News';
import Aboutus from './components/Aboutus/Aboutus';

function App() {
  return (
    <BrowserRouter>
      <Navbar classname="navbar"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Aboutus" element={<Aboutus/>} />
            <Route path="/News" element={<News/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
