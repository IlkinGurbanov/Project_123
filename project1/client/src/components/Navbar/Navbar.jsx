import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
        <div className="navstart">
            Dazzling demo
        </div>
        <div className="navend">
            <div className="navitem">
                <p className="navlist">
                    <Link className='navlink' to="/">Home</Link>
                </p>
            </div>
            <div className="navitem">
                <p className="navlist">
                    <Link className='navlink' to="/Add">Add</Link>
                </p>
            </div>
            <div className="navitem">
                <p className="navlist">
                    <Link className='navlink' to='/Wishlist'>Wishlist</Link>
                </p>
            </div>
            <div className="navitem">
                <p className="navlist">About</p>
            </div>
            <div className="navitem">
                <p className="navlist">Languages</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar