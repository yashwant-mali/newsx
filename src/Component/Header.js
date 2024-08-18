import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderComp/HeaderCSS.css'; 

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav className="header-content">
                <ul className="nav justify-content-center nav-underline">
                        <li className="nav-item" >
                            <Link className="nav-link active"  to="/notification"> Notifications </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active"  to="/profile"> Profile </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;