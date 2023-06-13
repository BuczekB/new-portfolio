import './Home.css'

const Home = () =>{
    return(
        <div className="homeContainer">
            <nav>
                <div className='logo'>JB</div>
                <ul className='navList'>
                    <li className='listItem'><p>Home</p></li>
                    <li className='listItem'><p>About</p></li>
                    <li className='listItem'><p>Projects</p></li>
                </ul>
            </nav>
            <div className='avatar'>
                <div className='avatarImg'></div>
                <div className='bg'></div>
            </div>
            <h1>Jakub Buczyński</h1>
            <h2>Programista junior frontend, szukam pierwszej pracy</h2>
            <div className="boxOfButtons">
                <button className='a'> 
                    Aplikacje
                </button>
                <button>
                    Kod
                </button>
            </div>
        </div>
    )
}

export default Home