import logoFakeShop from './assets/avatarFakeShop.jpg'

import imageFakeShopFirst from './assets/ifp/FakeShop1.png'
import imageFakeShopSecound from './assets/ifp/FakeShop2.png'
import imageFakeShopThird from './assets/ifp/FakeShop3.png'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const FakeShop = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoFakeShop}></img>
            <div>
            <h1 className='projectHeadingH1' >FakeShop</h1>
            <h2 className='projectHeadingH2' >Project simulate ecommers website</h2>
            <div className='listBox'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='https://github.com/BuczekB/new-shop' target='blank' >Go to</a></li>
                    <li className='soon'>FAQ</li>
                </ul>
            </div>
            <div className='imagesBox'>
                <img className='singleImageApp' src={imageFakeShopFirst}></img>
                <img className='singleImageApp' src={imageFakeShopThird}></img>
                <img className='singleImageApp' src={imageFakeShopSecound}></img>
            </div>
            </div>
            <div className='aboutProject' id='about'>
                <h2>About</h2>
                <p>
                FakeShop is my project when i simulate problems and solutions like we meet in normal comercial ecommers website.
                </p>
                <p>
                To build frontend version I use React and SCSS, to build backend NodeJS but backend is simple app to communicate with DataBase. Most of the application is frontend
                </p>
            </div>
        </div>
    )
}



export default FakeShop