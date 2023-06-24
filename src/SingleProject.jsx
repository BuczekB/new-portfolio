



const SingleProject = (props) =>{


    return(
                <div className='projectBox'>
                    <div className='avatarBox'>
                        <div><img className="imageAvatar" src={props.avatar}></img></div>
                    </div>
                   <div className='textBox'>
                   <h2 className='firstText'>{props.nameOfProject}</h2> 
                    <h3 className='secoundText'>{props.text}</h3>
                   </div>
                </div>
    )
}

export default SingleProject