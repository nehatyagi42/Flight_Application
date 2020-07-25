import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary header">
            <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
                <span style={{ paddingLeft: 10 }}>
                    Flight Forms
                </span>
            </a>

            <div className="collapse navbar-collapse" id="navbarsExample02">
            
                <Link to="signin" className="mx-2">
                <button className="btn btn-danger">
                    Sign in
            </button>
                </Link>
                <Link to="signup" className="mx-2">
                <button className="btn btn-danger">
                    Register
            </button>
                </Link>
          
            </div>
        </nav>
    );
}
export default Navbar;
