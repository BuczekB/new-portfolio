import './Navigation.css'

import {Link} from 'react-router-dom'

const Navigation = (props) =>{





    return(
        <div className="navContainer">
            <nav>
                <div className='logo'>
                    <a href='/'>
                {props.logo}
                    </a></div>
                <ul className='navList'>
                   <Link to='/'> <li className='listItem'><p>Home</p></li></Link>
                   <Link to='/About'> <li className='listItem'><p>About</p></li></Link>
                   <Link to='/Projects'> <li className='listItem'><p>Projects</p></li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation