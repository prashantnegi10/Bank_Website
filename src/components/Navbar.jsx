import React, { useState } from 'react'
import { logo } from '../assets/index'
import { navLinks } from '../constants'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='bg-primary navbar section_padding'>
            <div className="navbar_img">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar_links">
                <ul>
                    {navLinks.map((link) => (
                        <li><a href={link.id}>{link.title}</a></li>
                    ))}
                </ul>
            </div>

            <div className="navbar-menu">
                {toggleMenu ?
                    <RiCloseLine color="#fff" size="27" onClick={() => setToggleMenu(false)} /> :
                    <RiMenu3Line color="#fff" size="27" onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="navbar-menu-links scale-up-center">
                        <div className="navbar-links">
                            <ul>
                                {navLinks.map((link) => (
                                    <li><a href={link.id}>{link.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar