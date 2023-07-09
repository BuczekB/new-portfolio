
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

function App() {
 

  return (
    <>
      <div>
        <Routes>
              <Route path='/new-portfolio' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>} />
              <Route path='/About' element={<About/>} />
              <Route path='/Projects/WeatherApp' element={<WeatherApp/>} />
              <Route path='/Projects/BJGame' element={<BJGame/>} />
              <Route path='/Projects/Website' element={<Website/>} />
              <Route path='/Projects/CryptoApp' element={<CryptoApp/>} />
        </Routes>
        <Cursor/>
      </div>
    </>
  )
}

export default App
