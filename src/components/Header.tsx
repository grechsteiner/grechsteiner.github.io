import { NavLink } from 'react-router-dom';
import React from 'react';
import LinkedInIcon from '../assets/icons/linkedin.svg?react';
import GitHubIcon from '../assets/icons/github.svg?react';
import EmailIcon from '../assets/icons/email.svg?react';
import SEWebringIcon from '../assets/icons/se-webring.svg?react';


type HeaderProps = {
    contentWidthClass: string;
};
  
export default function Header({ contentWidthClass }: HeaderProps) {
    const navItems = [
        { path: '/', label: 'Home'},
        { path: '/about', label: 'About'},
        { path: '/work', label: 'Work'},
        { path: '/projects', label: 'Projects'}
    ];
      
    return (
        <header className={`shrink-0 ${contentWidthClass}`}>
            <div className="flex justify-between items-center w-full p-4">
                <nav>
                    <ul className="flex space-x-12">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => 
                                        `transition-colors text-lg ${
                                            isActive
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex">
                    <a
                        href="https://github.com/grechsteiner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center mr-[8px]"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="w-[30px] h-[30px] aspect-square text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="https://linkedin.com/in/grechsteiner" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center mr-[12px]"
                        aria-label="LinkedIn"

                    >
                        <LinkedInIcon className="w-[30px] h-[30px] aspect-square text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="mailto:grayson@fullscale.org"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center mr-[8px]"
                        aria-label="Email"
                    >
                        <EmailIcon className="w-[30px] h-[30px] aspect-square text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="https://se-webring.xyz/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center"
                        aria-label="SE Webring"
                    >
                        <SEWebringIcon className="w-[30px] h-[30px] aspect-square text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </header>
    );
};  

