import awavtarDonut from './assets/avatarDonut.jpg'

import imageConfectioneryFirst from './assets/fimgaProjects/mainPage.png'
import imageConfectionerySecound from './assets/fimgaProjects/pricePage.png'
import imageConfectioneryThird from './assets/fimgaProjects/locationPage.png'

import imageConfectioneryFirstOriginal from './assets/fimgaProjects/mainPageO.png'
import imageConfectionerySecoundOriginal from './assets/fimgaProjects/locationPageO.png'
import imageConfectioneryThirdOriginal from './assets/fimgaProjects/pricePageO.png'


import './Confectionery.css'

import {useNavigate} from 'react-router-dom'




const Confectionery = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={awavtarDonut}></img>
            <div>
            <h1 className='projectHeadingH1' >Confectionery Website</h1>
            <h2 className='projectHeadingH2' >Old and new version of website</h2>
            <div className='listBox'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li className='soon'>Go to</li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBoxConfectionery'>
                <div className='newWeb'>
                    <h1>New Version Of Website</h1>
                <img className='singleImageAppConfectionery' src={imageConfectioneryFirst}></img>
                <img className='singleImageAppConfectionery' src={imageConfectionerySecound}></img>
                <img className='singleImageAppConfectionery' src={imageConfectioneryThird}></img>
                </div>
                <div className='oldWeb'>
                <h1>Old Version Of Website</h1>
                <img className='singleImageAppConfectionery' src={imageConfectioneryFirstOriginal}></img>
                <img className='singleImageAppConfectionery' src={imageConfectionerySecoundOriginal}></img>
                <img className='singleImageAppConfectionery' src={imageConfectioneryThirdOriginal}></img>
                </div>
            </div>
            </div>
            <div className='aboutProject' id='about'>
                <h2>About</h2>
                <p>
                I have created project of website for confectionery company to show my design skills.
                Project was created in Figma.
                </p>
            </div>
        </div>
    )
}



export default Confectionery