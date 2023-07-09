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
            Hi, my name is Jakub and I m searching for my first job as a programmer. My coding journey began a few years ago when I started learning languages like C++ and Python. However, most of my time has been devoted to frontend languages like JavaScript.
            </p>
            <p className='textAboutMe'>
            Now, I want to start working as a programmer because it provides me with the opportunity to learn much faster than I can on my own.
            </p>
            <p className='textAboutMe'>
            On my portfolio, you can find a few of my projects in the Applications or Projects section. I am continuously working on new ones.
            </p>
            <div className='contactStackBox'>
                <h2>Contact</h2>
                <div className='contactListBox'>
                <ul>
                    <li>E-MAIL: BUCZYNSKIJAKUB10@GMAIL.COM</li>
                    <li>PHONE NUMBER: +48 735 157 016</li>
                    <li>GITHUB: HTTPS://GITHUB.COM/BUCZEKB</li>
                </ul>
                </div>
            </div>
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