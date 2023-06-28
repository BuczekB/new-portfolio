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
                    <li>Tips</li>
                    <li>FAQ</li>
                    <li>Go to</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageBJFirst}></img>
                <img className='singleImageApp' src={imageBJSecound}></img>
                <img className='singleImageApp' src={imageBJThird}></img>
            </div>
            </div>
        </div>
    )
}



export default BJGame