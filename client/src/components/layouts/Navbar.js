import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <div className="name">
                <Link className="na" to="/">
                    <a>Are you</a>
                    <a className="half"> hungry?</a>
                </Link>
            </div>
            <div className="right_buttons">
                <Link className="r_b" to="/contactus">
                    <i class="fas fa-hamburger"></i>
                </Link>
                <Link className="r_b" to="/login">
                    <i class="fas fa-sign-in-alt"></i>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
