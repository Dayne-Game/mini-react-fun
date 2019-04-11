import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export default function Navbar() {
    return (
        <div className="navbar" style={navbarStyle}>
            <Link className="links" style={linkStyle} to="/">Home</Link>
            <Link className="links" style={linkStyle} to="/about">About</Link>
        </div>
    )
}

const navbarStyle = {
    height: '70px',
    width: '100 %',
    backgroundColor: 'red',
    lineHeight: '70px'
}

const linkStyle = {
    padding: '14px 16px',
    color: '#fff',
    textDecoration: 'none'
}