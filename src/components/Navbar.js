import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode.backgroundColor }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: props.mode.color }} to="/">{props.title}</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ color: props.mode.color }} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: props.mode.color }} to="/about">Acout</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn ${props.mode.color === "black" ? "btn-outline-primary" : "btn-secondary"}`} type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch ms-3">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" style={{ color: props.mode.color }} htmlFor="flexSwitchCheckDefault">{props.mode.backgroundColor === "#e3f2fd" ? "Enable Dark Mode" : "Enable Light Mode"}</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
};

// Navbar.defaultProps = {
//     title : 'Navbar'
// }