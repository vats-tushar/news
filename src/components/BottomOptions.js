import React from 'react'
import { Link } from 'react-router-dom'
import './BottomOptions.css'
const BottomOptions =(props)=> {

    return (
        <nav className={`navbar navbar-expand sticky-bottom bg-${props.mode}`} id='bott'>
            
            <ul className="navbar-nav" id='botnav'>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    
        </nav>
    )
}

export default BottomOptions
