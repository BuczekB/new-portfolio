import './Navigation.css'

import {Link, useSearchParams} from 'react-router-dom'

const Navigation = () =>{

const searchParams = useSearchParams()


console.log(searchParams);

    return(
        <div className="navContainer">
            <nav>
                <div className='logo'>JB</div>
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