
import logoWebsite from './assets/avatarWebsite.jpg'

import imageWebsiteFirst from './assets/ifp/website1.png'
import imageWebsiteSecound from './assets/ifp/website2.png'
import imageWebsiteThird from './assets/ifp/website3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const Website = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoWebsite}></img>
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
                <img className='singleImageApp' src={imageWebsiteFirst}></img>
                <img className='singleImageApp' src={imageWebsiteSecound}></img>
                <img className='singleImageApp' src={imageWebsiteThird}></img>
            </div>
            </div>
        </div>
    )
}



export default Website