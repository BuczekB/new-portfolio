import './Home.css'

import Navigation from './Navigation'

import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <div className="homeContainer">
           <Navigation/>
            <div className='avatar'>
                <div className='avatarImg'></div>
                <div className='bg'></div>
            </div>
            <h1>Jakub Buczyński</h1>
            <h2>Programista junior frontend, szukam pierwszej pracy</h2>
            <div className="boxOfButtons">
                <Link to='/Projects'>
                <button className='firstButton'> 
                    Aplikacje
                </button>
                </Link>
                <Link to='/Kod'>
                <button className='secoundButton'> 
                    Kod
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Home