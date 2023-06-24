import './Home.css'

import Navigation from './Navigation'

import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <div className="homeContainer">
          <Navigation logo='JB' />
            <div className='avatar'>
                <div className='avatarImg'></div>
                <div className='bg'></div>
            </div>
            <h1>Jakub Buczyński</h1>
            <h2>Programista junior frontend, szukam pierwszej pracy</h2>
            <div className="boxOfButtons">
                <Link to='/Projects'>
                <button  className='firstButton'> 
                    Aplikacje
                </button>
                </Link>
                <a target='blank' href='https://github.com/BuczekB'>
                <button  className='secoundButton'> 
                Kod
                </button>
                </a>
            </div>
        </div>
    )
}

export default Home