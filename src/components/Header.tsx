import { NavLink } from 'react-router-dom';


const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded transition-colors ${isActive
        ? "bg-white text-black"
        : "text-white hover:bg-white hover:text-black"
    }`;

type HeaderProps = {
    
};
  
export default function Header({ }: HeaderProps) {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <nav>
                        <ul className="flex space-x-6">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    isActive 
                                    ? "bg-white text-black px-4 py-2 rounded-lg font-medium" 
                                    : "text-white hover:underline"
                                }
                                >
                                [home]
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    isActive 
                                    ? "bg-white text-black px-4 py-2 rounded-lg font-medium" 
                                    : "text-white hover:underline"
                                }
                                >
                                about
                                </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/work" 
                                className={({ isActive }) => 
                                    isActive 
                                    ? "bg-white text-black px-4 py-2 rounded-lg font-medium" 
                                    : "text-white hover:underline"
                                }
                                >
                                work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/projects" 
                                className={({ isActive }) => 
                                    isActive 
                                    ? "bg-white text-black px-4 py-2 rounded-lg font-medium" 
                                    : "text-white hover:underline"
                                }
                                >
                                projects
                            </NavLink>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};  

