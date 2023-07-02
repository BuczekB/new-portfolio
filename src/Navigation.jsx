import './Navigation.css'

import { useState } from 'react'


import {Link} from 'react-router-dom'

const Navigation = (props) =>{

    
    const [flag, setFlag] = useState(true)
    const [close, setClose] = useState('')
    const [open, setOpen] = useState('')

    

   


const openMenu = () =>{

    setOpen('isVisable')
    
}

const closeMenu = () =>{

    setOpen('unvisable')
    
}



    return(
        <div>
            <div className={open}>
            <div className="navContainer">
            <nav>
                <div className='logo'>
                    <a href='/'>
                {props.logo}
                    </a></div>
               
                <ul onClick={closeMenu} className='navList'>
                   <Link to='/'> <li  className='listItem'><p>Home</p></li></Link>
                   <Link to='/About'> <li  className='listItem'><p>About</p></li></Link>
                   <Link to='/Projects'> <li  className='listItem'><p>Projects</p></li></Link>
                </ul>
            </nav>
            </div>    
        </div>
        <div className='isVisable'>
                <div onClick={openMenu} className='menuOnMobile'>
                    <svg  className='menuIcon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                    </svg>
                    </div>
                </div>   
        </div>
    )
}

export default Navigation