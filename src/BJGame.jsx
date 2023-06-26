import logoBJGame from './assets/avatarBJ.jpg'

import './CryptoApp.css'

import {useNavigate} from 'react-router-dom'




const BJGame = () =>{

    const navigate = useNavigate()

    return(
        <div className='singleProjectContainer'>
            <div className='buttonBox'>
               <button onClick={() => navigate(-1)} className='backButton'>
                    Back
                </button>
            </div>
            <img className='imageOfProject' src={logoBJGame}></img>
            <div>
            <h1 className='projectHeadingH1' >CryptoApp</h1>
            <h2 className='projectHeadingH2' >Infrmation about every crypto coins</h2>
            </div>
        </div>
    )
}



export default BJGame