import './Figma.css'

import Navigation from './Navigation'
import SingleProject from './SingleProject'



import logoDonut from './assets/avatarDonut.jpg'

import {Link} from 'react-router-dom'


const namesOfProjects = [ 
    {name:'Confectionery', text:'New and old version of website', avatar: logoDonut},
    ] 

const listOfProjects = namesOfProjects.map((item) =>{
    return(
        <Link key={item.name} to={item.name}>
        <SingleProject avatar={item.avatar} nameOfProject={item.name} text={item.text}/>
        </Link>
    )
})


const Figma = () =>{
    return(
        <div className="homeContainerFigma">
             <Navigation logo='JB' />
             <h1>  Figma Project</h1>
            <div className='projectContainerFigma'>
                {listOfProjects}
            </div>

           
        </div>
    )
}

export default Figma