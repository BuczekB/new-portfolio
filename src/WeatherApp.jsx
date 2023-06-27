import logoWeatherApp from './assets/avatarWeather.jpg'

import imageWeatherFirst from './assets/ifp/weather1.png'
import imageWeatherSecound from './assets/ifp/weather2.png'
import imageWeatherThird from './assets/ifp/weather3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const WeatherApp = () =>{

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
                <img className='singleImageApp' src={imageWeatherFirst}></img>
                <img className='singleImageApp' src={imageWeatherSecound}></img>
                <img className='singleImageApp' src={imageWeatherThird}></img>
            </div>
            </div>
        </div>
    )
}



export default WeatherApp