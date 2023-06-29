import logoBJGame from './assets/avatarBJ.jpg'

import imageBJFirst from './assets/ifp/bg1.png'
import imageBJSecound from './assets/ifp/bg2.png'
import imageBJThird from './assets/ifp/bg3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const BJGame = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoBJGame}></img>
            <div>
            <h1 className='projectHeadingH1' >BlackJack</h1>
            <h2 className='projectHeadingH2' >Casino card game</h2>
            <div className='listBox'>
                <ul>
                <li><a href='#about'>About</a></li>
                    <li><a href='https://buczekb.github.io/game-bj/' target='blank' >Go to</a></li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageBJFirst}></img>
                <img className='singleImageApp' src={imageBJSecound}></img>
                <img className='singleImageApp' src={imageBJThird}></img>
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



export default BJGame