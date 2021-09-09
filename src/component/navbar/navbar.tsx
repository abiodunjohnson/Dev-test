import React from 'react';
import { NotificationIcon, EmailIcon, SettingIcon } from '../../asset/icon';
import avatar from '../../asset/img/avatar.png'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar-wrapper">
                <div className="navbar-cont">
                <div className="search-wrapper"> 
                <input className="search-icon" type="text" placeholder="Search" />
                </div>
                <div className="icon-wrapper">
                    <div className="icon-cont"> <NotificationIcon/></div>
                    <div className="icon-cont"> <EmailIcon/></div>
                    <div className="icon-cont"> <SettingIcon/></div>
                    <div className="icon-cont">  <img className="avatar" src={avatar} alt="Avatar" /></div>          
                </div>
                </div>
            </div>
        
        </>
    )
};

export default Navbar;