import './Projects.css'

import Navigation from './Navigation'

import SingleProject from './SingleProject'

import logoBTC from './assets/avatarBTC.jpg'
import logoWeather from './assets/avatarWeather.jpg'
import logoWebiste from './assets/avatarWebsite.jpg'
import logoBJ from './assets/avatarBJ.jpg'


const namesOfProjects = [ 
    {name: 'Crypto App', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoBTC}, 
    {name:'Weather App', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoWeather}, 
    {name:'BJ Game', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoBJ}, 
    {name:'Website', text:'aaefref asdasda grwegr dcsvsdfasdf aWEA FD', avatar: logoWebiste}] 

const listOfProjects = namesOfProjects.map((item) =>{
    return(
        <SingleProject key={item.name} avatar={item.avatar} nameOfProject={item.name} text={item.text}/>
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