
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Projects from './Projects'
import About from './About'

function App() {
 

  return (
    <>
      <div>
        <Routes>
          
              <Route path='/' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>} />
              <Route path='/About' element={<About/>} />
       
        </Routes>
      </div>
    </>
  )
}

export default App
