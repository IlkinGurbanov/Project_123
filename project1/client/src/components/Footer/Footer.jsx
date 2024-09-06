import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footitem">
            <p className="footitemtext">Home</p>
            <p className="footitemtext">Gallery</p>
            <p className="footitemtext">About</p>
            <p className="footitemtext">Languages</p>
            <p className="footitemtext">Short</p>
        </div>
        <div className="footenditem">
            Dazzling Demo All rights reserved. Theme by Colorlib Powered by WordPress
        </div>
    </div>
  )
}

export default Footer