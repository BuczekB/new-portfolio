import logoWeatherApp from './assets/avatarDealer.jpg'

import imageWeatherFirst from './assets/ifp/dealerApp1.png'
import imageWeatherSecound from './assets/ifp/dealerApp2.png'
import imageWeatherThird from './assets/ifp/dealerApp3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const DealerApp = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoWeatherApp}></img>
            <div>
            <h1 className='projectHeadingH1' >Dealer App</h1>
            <h2 className='projectHeadingH2' >Aplication to traning new dealers</h2>
            <div className='listBox'>
                <ul>
                <li><a href='#about'>About</a></li>
                    <li><a href='https://buczekb.github.io/dealer-app' target='blank' >Go to</a></li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageWeatherFirst}></img>
                <img className='singleImageApp' src={imageWeatherSecound}></img>
                <img className='singleImageApp' src={imageWeatherThird}></img>
            </div>
            </div>
            <div className='aboutProject' id='about'>
                <h2>About</h2>
                <p>
                Created this app for new dealers to training them. With this app they can level up with skill faster and easier. It was developed using <strong>React</strong> and <strong>CSS</strong>.Tested correct working of app with <strong>unit tests</strong> 
                </p>
            </div>
        </div>
    )
}



export default DealerApp