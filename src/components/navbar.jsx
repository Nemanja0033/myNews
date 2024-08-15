import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top  bg-light" data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span><img style={{width: "220px"}} src={logo} alt="" /></span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => setCategory("general")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCategory("science")}>Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
