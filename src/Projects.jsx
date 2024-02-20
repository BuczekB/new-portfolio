import './Projects.css'

import Navigation from './Navigation'
import SingleProject from './SingleProject'


import logoBTC from './assets/avatarBTC.jpg'
import logoWeather from './assets/avatarWeather.jpg'
import logoWebiste from './assets/avatarWebsite.jpg'
import logoBJ from './assets/avatarBJ.jpg'
import logoFakeShop from './assets/avatarFakeShop.jpg'
import logoDealer from './assets/avatarDealer.jpg'

import {Link} from 'react-router-dom'


const namesOfProjects = [ 
    {name:'DealerApp', text:'Aplication to traning new dealers', avatar: logoDealer},
    {name:'FakeShop', text:'Project simulate ecommers website', avatar: logoFakeShop},
    {name: 'CryptoApp', text:'Everything about crypto', avatar: logoBTC}, 
    {name:'WeatherApp', text:'Information about weather', avatar: logoWeather}, 
    {name:'BJGame', text: 'Just game BlackJack', avatar: logoBJ}, 
    {name:'Website', text:'Simple website for small company', avatar: logoWebiste}
    ] 

const listOfProjects = namesOfProjects.map((item) =>{
    return(
        <Link key={item.name} to={item.name}>
        <SingleProject avatar={item.avatar} nameOfProject={item.name} text={item.text}/>
        </Link>
    )
})


const Projects = () =>{
    return(
        <div className="homeContainer">
             <Navigation logo='JB' />
             <h1>  Programming Projects</h1>
            <div className='projectContainer'>
                {listOfProjects}
            </div>

           
        </div>
    )
}

export default Projects