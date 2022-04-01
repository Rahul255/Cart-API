import React from 'react';
import './Navbar.css';
const Navbar = () => {
    let count = window.localStorage.getItem("items");
    return (
        <div className="header navigation">
            <div className="col-xl-3 col-lg-2 col-sm-4 col-5 pt-3">
                <p style={{textDecoration:"no"}}>UNI Resto Cafe</p>
            </div>
            <div className="col-xl-7 col-lg-10 col-sm-8 col-7">

                <ul className="navbar-nav flex-row justify-content-end flex-wrap align-items-center mr-lg-4 mr-xl-0">
                    
                    <li className="nav-item px-3 text-uppercase mb-0 position-relative d-lg-flex">
                        <div id="cart" className="d-none">

                        </div>
                        <a href="/" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
                            <i className="fas fa fa-shopping-cart fa-lg"></i>
                            <span className="cart-basket d-flex align-items-center justify-content-center">
                                {count}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;