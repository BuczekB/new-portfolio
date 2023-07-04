import {   useRef } from 'react'
import './Navigation.css'




import {NavLink} from 'react-router-dom'

const Navigation = (props) =>{

    const screenWidth = window.innerWidth

    const navRef = useRef()

    const  showNav =  () => {

        
            navRef.current.classList.toggle("unvisable") 
        
        
      
    }


    
   




    return(
        <div>
                <div ref={navRef}>
                    <div className="navContainer">
                    <nav>
                        <div className='logo'>
                            <a href='/'>
                        {props.logo}
                            </a></div>
                    
                        <ul className='navList'>
                        <li onClick={showNav} className='listItem'><NavLink to='/'><p className='navItem'>Home</p></NavLink></li>
                        <NavLink to='/About'> <li onClick={showNav} className='listItem'><p className='navItem'>About</p></li></NavLink>
                        <li onClick={showNav} className='listItem'><NavLink to='/Projects'><p className='navItem'>Projects</p></NavLink></li>
                        </ul>
                    </nav>
                    </div>    
                </div>
                        <div className='isVisable'>
                                <div onClick={showNav}  className='menuOnMobile'>
                                    <svg  className='menuIcon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                                    </svg>
                                    </div>
                            </div>   
        </div>
    )
}

export default Navigation