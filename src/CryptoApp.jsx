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
                    <li>Tips</li>
                    <li>FAQ</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageCryptoAppFirst}></img>
                <img className='singleImageApp' src={imageCryptoAppThird}></img>
                <img className='singleImageApp' src={imageCryptoAppSecound}></img>
            </div>
            </div>
        </div>
    )
}



export default CryptoApp