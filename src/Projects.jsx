import './Projects.css'

import Navigation from './Navigation'
import SingleProject from './SingleProject'


import logoBTC from './assets/avatarBTC.jpg'
import logoWeather from './assets/avatarWeather.jpg'
import logoWebiste from './assets/avatarWebsite.jpg'
import logoBJ from './assets/avatarBJ.jpg'

import {Link} from 'react-router-dom'


const namesOfProjects = [ 
    {name: 'CryptoApp', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoBTC}, 
    {name:'WeatherApp', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoWeather}, 
    {name:'BJGame', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoBJ}, 
    {name:'Website', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoWebiste}] 

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
             <h1>  Programming Project</h1>
            <div className='projectContainer'>
                {listOfProjects}
            </div>

           
        </div>
    )
}

export default Projects