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
            <h1 className='projectHeadingH1' >WeatherApp</h1>
            <h2 className='projectHeadingH2' >Simple application to check weather wherver you want</h2>
            <div className='listBox'>
                <ul>
                <li><a href='#about'>About</a></li>
                    <li><a href='https://buczekb.github.io/weatherApp-useApi/' target='blank' >Go to</a></li>
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
                I have created an application that allows you to check information about every cryptocurrency. It was developed using React, TypeScript, Redux and Material UI.
                </p>
            </div>
        </div>
    )
}



export default WeatherApp