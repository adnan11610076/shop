import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from "react-router-dom";


const Footer = () => {



    return (
        <>
            <div className="footer">

                <div className="footer-logo">
                    <img src={footer_logo} alt="" />
                    <p>Shopper</p>
                </div>
                <ul className="footer-link ">
                    <li >Company</li>
                    <li >Products</li>
                    <li>Offices</li>
                    <li><Link to='/about'  onClick={()=>window.scrollTo(0,0)}>About</Link></li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">

                    <div className="footer-icons-container">
                       <Link to="https://www.instagram.com/accounts/login/"> <img src={instagram_icon} alt="" /></Link>
                    </div>

                    <div className="footer-icons-container">
                       <Link to="https://www.pinterest.com.au/"><img src={pintester_icon} alt="" /></Link> 
                    </div>

                    <div className="footer-icons-container">
                     <Link to="https://web.whatsapp.com/"><img src={whatsapp_icon} alt="" /></Link>   
                    </div>

                </div >

                <div className="footer-copyright">
                    <hr />
                    <p>copyright@2024 - ALL RIGHT RESERVED</p>
                </div>
            </div >
        </>
    )
}
export default Footer;