import { useState } from 'react'
import './Navigation.css'




import {Link} from 'react-router-dom'

const Navigation = (props) =>{


    const [flag, setFlag] = useState(false)
    const [isClose, setIsClose] = useState('')
 

    
    const closeMenu = () =>{

        const classOfMenu = flag ? 'unvisable' : 'isVisable'

        setFlag(!flag)

        console.log(classOfMenu);

        setIsClose(classOfMenu)

    }

    const openMenu = () =>{

        const classOfMenu =  'isVisable'


        setIsClose(classOfMenu)

    }
   




    return(
        <div>
                <div className={isClose}>
                    <div className="navContainer">
                    <nav>
                        <div className='logo'>
                            <a href='/'>
                        {props.logo}
                            </a></div>
                    
                        <ul className='navList'>
                        <li onClick={closeMenu} className='listItem'><Link to='/'><p className='navItem'>Home</p></Link></li>
                        <li  className='listItem'><Link to='/About'><p className='navItem'>About</p></Link></li>
                        <li  className='listItem'><Link to='/Projects'><p className='navItem'>Projects</p></Link></li>
                        </ul>
                    </nav>
                    </div>    
                </div>
                        <div className='isVisable'>
                                <div onClick={openMenu}  className='menuOnMobile'>
                                    <svg  className='menuIcon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                                    </svg>
                                    </div>
                            </div>   
        </div>
    )
}

export default Navigation