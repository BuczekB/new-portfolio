
import { Routes, Route } from 'react-router-dom'
import './App.css'



import Home from './Home'
import Projects from './Projects'
import About from './About'
import Cursor from './cursor'
import WeatherApp from './WeatherApp'
import BJGame from './BJGame'
import Website from './Website'
import CryptoApp from './CryptoApp'
import FakeShop from './FakeShop'
import Figma from './Figma'
import Confectionery from './Confectionery'
import DealerApp from './DealerApp'

function App() {
 

  return (
    <>
      <div>
        <Routes>
              <Route path='/new-portfolio' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/Figma' element={<Figma/>} />
              <Route path='/Projects/WeatherApp' element={<WeatherApp/>} />
              <Route path='/Projects/BJGame' element={<BJGame/>} />
              <Route path='/Projects/Website' element={<Website/>} />
              <Route path='/Projects/CryptoApp' element={<CryptoApp/>} />
              <Route path='/Projects/FakeShop' element={<FakeShop/>} />
              <Route path='/Figma/Confectionery' element={<Confectionery/>} />
              <Route path='/Projects/DealerApp' element={<DealerApp/>} />
        </Routes>
        <Cursor/>
      </div>
    </>
  )
}

export default App
