import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Gallery from './pages/gallery.jsx'
import Home from './pages/Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/gallery' element={ <Gallery/> } />
      <Route path='/about' element={ <About/> } />

    </Routes>
    
    </BrowserRouter>
     
  
      

    </>
  )
}


export default App


