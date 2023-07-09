
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
            <h1 className='projectHeadingH1' >Website</h1>
            <h2 className='projectHeadingH2' >Landing page of small company</h2>
            <div className='listBox'>
                <ul>
                <li><a href='#about'>About</a></li>
                    <li><a href='https://buczekb.github.io/website-FRYZ/' target='blank' >Go to</a></li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageWebsiteFirst}></img>
                <img className='singleImageApp' src={imageWebsiteSecound}></img>
                <img className='singleImageApp' src={imageWebsiteThird}></img>
            </div>
            </div>
            <div className='aboutProject' id='about'>
                <h2>About</h2>
                <p>
                I have created a landing page for a small company in Lublin. It is a simple website that provides necessary information about the company. The development of this page was done using <strong>JavaScript and CSS.</strong>
                </p>
            </div>
        </div>
    )
}



export default Website