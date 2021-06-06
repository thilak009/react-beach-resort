import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn,FaTwitter} from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <h4>Made by Thilak</h4>
            <div className="social-links">
                <a href="https://twitter.com/thilak_ch" target="_blank" rel="noreferrer" className="social-link"><FaTwitter/></a>
                <a href="https://github.com/thilak009" target="_blank" rel="noreferrer" className="social-link"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/thilak-reddy-87ab4b1b3/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedinIn/></a>
            </div>
        </div>
    )
}

export default Footer
