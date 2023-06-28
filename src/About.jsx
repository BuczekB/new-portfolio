import './About.css'

import Navigation from './Navigation'
import Footer from './footer'

const About = () =>{
    return(
        <div className="aboutContainer">
            <div>
            <Navigation logo='JB'/>
            <h1 className='aboutHeadingH1'>
            About Jakub Buczynski
            </h1>
            <p  className='textAboutMe'>
            I’m a full-time open-source developer. In 2014, I quit my office job to backpack around Southeast Asia while doing open-source. I have since settled in Bangkok, Thailand, but I’m still doing open-source all day. In early 2018, I became fully funded by the community.
            </p>
            <p className='textAboutMe'>
            My current focus is on macOS app development with Swift and Node.js-based packages and CLI tools. I actively maintain 1000+ npm packages and many popular projects. 
            </p>
            <div className='techStackBox'>
                <h2>Tech Stack</h2>
                <div className='techListBox'>
                <ul>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>GIT</li>
                    <li>TypeScript</li>
                </ul>
                <ul>
                    <li>API</li>
                    <li>RWD</li>
                    <li>SASS</li>
                    <li>React Router</li>
                    <li>Redux</li>
                    <li>Material Ui</li>
                </ul>
                </div>
            </div>
            <Footer/>
            </div>
            
        </div>
    )
}

export default About