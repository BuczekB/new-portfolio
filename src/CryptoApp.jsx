import logoBTC from './assets/avatarBTC.jpg'

import imageCryptoAppFirst from './assets/ifp/crypto1.png'
import imageCryptoAppSecound from './assets/ifp/crypto2.png'
import imageCryptoAppThird from './assets/ifp/crypto3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const CryptoApp = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoBTC}></img>
            <div>
            <h1 className='projectHeadingH1' >CryptoApp</h1>
            <h2 className='projectHeadingH2' >Infrmation about every crypto coins</h2>
            <div className='listBox'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='https://buczekb.github.io/crypto-app/' target='blank' >Go to</a></li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageCryptoAppFirst}></img>
                <img className='singleImageApp' src={imageCryptoAppThird}></img>
                <img className='singleImageApp' src={imageCryptoAppSecound}></img>
            </div>
            </div>
            <div className='aboutProject' id='about'>
                <h2>About</h2>
                <p>
                You can use the Shortcuts app to make time presets. For example, you can make a shortcut that sets the day range to 13:00 - 18:00 and run it on the days were you want that range. 
                And another shortcut to reset it back to the normal day range. Example shortcut.
                </p>
            </div>
        </div>
    )
}



export default CryptoApp