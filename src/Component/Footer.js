import React from "react";
import { Link } from 'react-router-dom';

import './FooterCSS.css'; // Import a CSS file to style your footer




class Footer extends React.Component {
    render() {

        return (
            <div className="footer">
                <nav className="footer-content">
                    <ul className="nav justify-content-center nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/addnews">addnews  </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Footer;

