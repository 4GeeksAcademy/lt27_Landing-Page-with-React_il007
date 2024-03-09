import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-center p-2" href="#">
                Start Bootstrap
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end p-2 text-center" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home 
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;