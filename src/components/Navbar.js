import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {SidebarData} from './SidebarData'
import './Navbar.css'
import '../App.css'
import logo from '../assets/bayu_buana_logo.png'
import {Container} from 'react-bootstrap';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../assets/rsz_kat_selfie.jpg";

function Navbar(){
    const[sideBar, setSideBar] = useState(false);

    const showSideBar = ()=> setSideBar(!sideBar);
    
    return(
        <>        
        <div className="navbar ml-3">
            <Link to="#" className="menu-bars" >
                <FontAwesomeIcon icon={['fas', 'bars']} onClick={showSideBar}/>
            </Link>   
            <tr>
                <td className="ml-3">
                    <Container className=" navbar navbar-light bg-light fixed-top py-lg-0 ml-5 " >                    
                        <img src={logo} className="BayuBuanaLogo ml-5" alt="Logo Bayu Buana" />                                
                            <tr>
                                <td style={{width:30}}>
                                    <Link to="" >        
                                        <FontAwesomeIcon  icon={['fas', 'circle-question']}/>        
                                    </Link>
                                </td>                                
                                <td style={{width:30}}>
                                    <Link to="" >        
                                        <FontAwesomeIcon icon={['far', 'bell']}/>                                    
                                    </Link>
                                </td>                                
                                <td style={{width:30}}>
                                   <ReactRoundedImage image={MyPhoto} 
                                   roundedSize="0" 
                                   imageWidth="30" imageHeight="30" />
                                </td>
                            </tr>
                    </Container>
                </td>
            </tr>
            <hr />
        </div>
        
        <nav className ={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSideBar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <FontAwesomeIcon color="#fcfcfc" icon={['fas', 'circle-xmark']}/>
                    </Link>
                </li>
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName} >
                            <Link to={item.path} >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar