import React, { useState } from 'react'
import Container from './container'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import tiktok from '../assets/images/tiktok.svg'
import instagram from '../assets/images/insta.svg'
import snapchat from '../assets/images/snap.png'
import X from '../assets/images/twitter.svg'
import Button from './Button'
import britishflag from '../assets/images/britishflag.png'
import arrowdown from '../assets/images/arrowdown.svg'
import hamburger from '../assets/images/hamburger.svg'
import close from '../assets/images/cross.svg'

const socialIcons = [
    { icon: tiktok, href: '#', label: 'TikTok' },
    { icon: instagram, href: '#', label: 'Instagram' },
    { icon: X, href: '#', label: 'Twitter' },
    { icon: snapchat, href: '#', label: 'Snapchat' },
]

const navLinks = [
    { label: 'DINE WITH US', href: '#' },
    { label: 'PLAN YOUR VISIT', href: '#' },
    { label: 'EVENTS', href: '#' },
    { label: 'VIEW GROVES MAP', href: '#' },
    { label: 'OUR STORY', href: '#' },
    { label: 'CONTACT US', href: '#' },
]

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="w-full absolute top-0 left-0 z-50">
            <nav className="w-full bg-[rgba(0,0,0,0.52)]">

                <div className="w-full md:border-b-[0.5px] md:border-[#7b7676] py-1">
                    <Container>
                        <div className="flex items-center justify-between py-3">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="The Groves"
                                    className="w-[220px] h-[50px] object-contain"
                                />
                            </Link>

                            <div className="hidden md:flex items-center gap-5">
                                <div className="flex items-center gap-4">
                                    {socialIcons.map(({ icon, href, label }, index) => (
                                        <Link key={index} to={href}>
                                            <img src={icon} alt={label} className="w-[22px] h-[20px]" />
                                        </Link>
                                    ))}
                                </div>

                                <Button title="Log in" className='w-[142px] h-[48px]' />

                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src={arrowdown} alt="Dropdown" className="w-3 h-3" />
                                    <img src={britishflag} alt="English" className="w-[33px] h-[22px]" />
                                    <span className="text-white text-sm font-inter">English</span>
                                </div>
                            </div>

                            <div className="md:hidden flex items-center">
                                <img
                                    src={hamburger}
                                    alt="Menu"
                                    className="w-[26px] h-[16px] cursor-pointer"
                                    onClick={() => setSidebarOpen(true)}
                                />
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="hidden md:block w-full border-b-[0.5px] border-[#7b7676] py-2">
                    <Container>
                        <ul className="flex items-center justify-between gap-8">
                            {navLinks.map(({ label, href }, index) => (
                                <li key={index}>
                                    <Link
                                        to={href}
                                        className="text-white/90 text-[13px] font-inter tracking-[1px]"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>

                {sidebarOpen && (
                    <div className="fixed inset-0 z-50">
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50"
                            onClick={() => setSidebarOpen(false)}
                        />

                        <div className="absolute top-0 right-0 h-full w-full flex flex-col bg-[linear-gradient(93deg,#283606_0%,#0F1500_100%)] box-border">

                            <div className="flex justify-between items-center px-6 py-8 border-b-2 border-white/20">
                                <Link to="/" onClick={() => setSidebarOpen(false)}>
                                    <img
                                        src={logo}
                                        alt="The Groves"
                                        className="object-contain"
                                        style={{ width: '180px', height: '40px' }}
                                    />
                                </Link>
                                <img
                                    src={close}
                                    alt="Close"
                                    className="cursor-pointer"
                                    style={{ width: '20px', height: '20px' }}
                                    onClick={() => setSidebarOpen(false)}
                                />
                            </div>

                            <nav className="mb-8">
                                <ul className="list-none m-0 p-0">
                                    {navLinks.map(({ label, href }, index) => (
                                        <li
                                            key={index}
                                            className='border-b-2 border-white/20'
                                        >
                                            <Link
                                                to={href}
                                                onClick={() => setSidebarOpen(false)}
                                                className="block px-6 py-[18px] text-white/90 font-inter  no-underline text-[13px] tracking-[2px] font-light"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="flex flex-col gap-8 px-5">
                                <div
                                    className="flex items-center cursor-pointer"
                                    style={{ gap: '10px' }}
                                >
                                    <img src={arrowdown} alt="Dropdown" style={{ width: '12px', height: '8px' }} />
                                    <img src={britishflag} alt="English" style={{ width: '33px', height: '22px' }} />
                                    <span style={{ color: 'white', fontSize: '14px' }}>English</span>
                                </div>


                                <Button title="Log in" className='w-[142px] h-[48px]' />
                            </div>

                        </div>
                    </div>
                )}

            </nav>
        </div>
    )
}

export default Navbar