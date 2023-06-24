
import './cursor.css'
import { useState, useEffect } from 'react';

const Cursor = () =>{



    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    return(
        <div className='home'>
            <div className="glow-cursor " style={{ left: position.x, top: position.y }}></div>
            <div className="glow-cursor2 " style={{ left: position.x, top: position.y }}></div>
            <div className="glow-cursor3 " style={{ left: position.x, top: position.y }}></div>
        </div>
    )
}

export default Cursor