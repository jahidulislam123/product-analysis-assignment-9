import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Reveiw from './components/Reveiw/Reveiw';
import Footer from './components/Footer/Footer';
import Noutpound from './components/Notpound/Noutpound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br>

      <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
     <Route path='/home' element={<Home></Home>} ></Route>
     <Route path='/reveiw' element={<Reveiw></Reveiw>} ></Route>
     <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
     <Route path='/blog' element={<Blog></Blog>} ></Route>
     <Route path='/about' element={<About></About>} ></Route>
    <Route path='/*' element={<Noutpound></Noutpound>}></Route>
     
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
