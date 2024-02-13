import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import heart_img from "../Assets/heart-img.png";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const {getTotalWishlistItems}= useContext(ShopContext);

    return (
        <>
            <div className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="navbar-brand nav-logo">
                    <Link to='/'><img src={logo} alt="logo" />
                        <p>SHOPPER</p></Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav-menu collapse navbar-collapse" id="navbarSupportedContent">
                    <li onClick={() => { setMenu("shop") }} className="nav-item"><Link to="/" style={{ textDecoration: "none" }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }} className="nav-item"><Link to="/mens" style={{ textDecoration: "none" }}>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }} className="nav-item"><Link to="/womens" style={{ textDecoration: "none" }}>Women</Link>  {menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }} className="nav-item"><Link to="/kids" style={{ textDecoration: "none" }}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>

                    <li className="login-btn nav-item"><Link to='/login'> <button>Login</button></Link></li>
                </ul>

                <div className="nav-whislist">
                    <Link to="/wishlist">
                        <img src={heart_img } alt="" />
                    </Link>
                    <div className="wishlist-count">{getTotalWishlistItems()}</div>
                </div>

                <div className="nav-login-cart">

                    <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>

            </div>
        </>
    )
}


export default Navbar;