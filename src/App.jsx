import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './Components/MyNavbar.jsx';
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Contact from './Pages/Contact.jsx';
import Section from './Pages/Section.jsx';
import Menu from './Pages/Menu.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/Menu' element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
