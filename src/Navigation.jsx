import {   useState } from 'react'
import './Navigation.css'




import {Link} from 'react-router-dom'

const Navigation = (props) =>{

    

   
 const [isMobile, setIsMobile] = useState(true)

    const  showNav =  () => {

       isMobile ? setIsMobile(false) : setIsMobile(true)
       console.log(isMobile);
      
    }

  
    const closeMenu = () => {
        setIsMobile(true)
    }
    

    
   




    return(
        <div>
                    <div className="navContainer">
                    <nav>
                        <div className='logo'>
                        <Link to='/new-portfolio'>
                        {props.logo}
                        </Link>
                        </div>
                        <ul className='navList'>
                        <li className='listItem'><Link to='/new-portfolio'><p className='navItem'>Home</p></Link></li>
                        <Link to='/About'> <li className='listItem'><p className='navItem'>About</p></li></Link>
                        <li className='listItem'><Link to='/Projects'><p className='navItem'>Projects</p></Link></li>
                        <li className='listItem'><Link to='/Figma'><p className='navItem'>Figma</p></Link></li>
                        </ul>
                    </nav>
                    </div>    
                            <div onClick={showNav}  className='menuOnMobile'>
                                <svg  className='menuIcon' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                                </svg>
                            </div>

                        <div className={isMobile ? 'navBoxMobile' : 'navBoxMobileHiden'}>
                            <ul className={isMobile ? 'listBoxMobileHiden' : 'listBoxMobile'}>
                                <Link onClick={closeMenu} to='/new-portfolio'><li className='singleItem'>Home</li></Link>
                                <Link onClick={closeMenu} to='/About'><li className='singleItem'>About</li></Link>
                                <Link onClick={closeMenu} to='/Projects'><li className='singleItem'>Projects</li></Link>
                                <Link onClick={closeMenu} to='/Figma'><li className='singleItem'>Figma</li></Link>
                            </ul>
                        </div>
                                            
                              
        </div>
    )
}

export default Navigation