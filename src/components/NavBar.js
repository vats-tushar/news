import React from 'react';
import {Link} from 'react-router-dom';
import sun from '../sun.svg'
import moon from '../moon.png'
import logo from '../favicon-32x32.png'

const NavBar =(props) => {

    return (
      <div>
        <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode} fixed-top`}>
            <div className="d-flex" style={{marginLeft: '5px'}}>
                <div className='p-1'><img src={logo}  alt='logo'/></div>
                <div className='p-1'><Link className="navbar-brand" to="/" style={{fontSize: '20px'}}>NewsBurst</Link></div>
            </div>  
            <div className="container">
                
            </div>            
            <div className="form-check form-switch mx-2">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><img height="25px" width="25px" src={`${props.mode==='light'? sun: moon}`} alt='icon'/></label>
            </div>
                
            
        </nav>
      </div>
    )
  }

export default NavBar

