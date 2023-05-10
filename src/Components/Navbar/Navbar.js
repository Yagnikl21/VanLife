import React from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="left">
                <span>
                    <NavLink to="/">#VANLIFE</NavLink>
                </span>
            </div>
            <div className='right'>
                <NavLink to="host" style={({ isActive }) => ({ 
                            color: isActive ? '#161616' : '#4D4D4D', 
                            textDecoration : isActive ? 'underline': 'none'
                        })} > Host</NavLink>
                <NavLink to="about" style={({ isActive }) => ({ 
                            color: isActive ? '#161616' : '#4D4D4D', 
                            textDecoration : isActive ? 'underline': 'none'
                        })}>About</NavLink>
                <NavLink to="van" style={({ isActive }) => ({ 
                            color: isActive ? '#161616' : '#4D4D4D', 
                            textDecoration : isActive ? 'underline': 'none'
                        })} >Van</NavLink>
            </div>
        </nav>
    )
}