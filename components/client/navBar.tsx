'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinksList = [
        {name: "Home", path: "/", metadata: "The main page of the portfolio."},
        {name: "About", path: "/about", metadata: "The page containing all the information about Saif Elkastawy."},
        {name: "Contact", path: "/contact", metadata: "The page that contain all the contact information for Saif Elkastawy."}
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Custom dropdown arrow SVG (flipped triangle)
    const DropdownArrow = ({ isOpen }: { isOpen: boolean }) => (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: "transform 0.2s ease",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                marginLeft: "4px",
                display: "inline-block",
                verticalAlign: "middle",
            }}
        >
            <path
                d="M6 9L1 3H11L6 9Z"
                fill="currentColor"
            />
        </svg>
    );

    // Mobile hamburger icon
    const HamburgerIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );

    // Close icon
    const CloseIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );

    return (
        <nav className={`sticky top-0 left-0 bg-neutral-50/2.5 backdrop-blur-[15px] p-4 flex z-50`}>
            <div className={`flex-1`}>
                <h1 className={`text-3xl text-transparent font-bold bg-linear-to-br w-fit from-blue-300 via-violet-300 to-pink-300 bg-clip-text`}>Saif Elkastawy</h1>
            </div>
            
            {/* Desktop Navigation */}
            <ul className={`hidden sm:flex gap-4 item-center justify-center`}>
                {navLinksList.map((link) => (
                    <li key={link.name}>
                        <Link href={link.path} className={`size-full text-neutral-300 hover:-translate-y-2 transition-all duration-300 flex justify-center items-center`}>
                            {link.name}
                            <span className={`size-full`}></span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className={`sm:hidden flex items-center`}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                    {isDropdownOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobile && isDropdownOpen && (
                <div className={`absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-[15px] p-4 flex flex-col gap-2 border-t border-neutral-700`}>
                    {navLinksList.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-neutral-300 hover:text-white hover:-translate-y-1 transition-all duration-300 px-4 py-3 rounded-lg hover:bg-neutral-800/50`}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;