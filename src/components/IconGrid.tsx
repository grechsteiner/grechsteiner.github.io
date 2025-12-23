import { useState } from 'react';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { SiC, SiCplusplus, SiPython, SiScala, SiSwift, SiGnubash, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiGnu, SiReact, SiTailwindcss } from 'react-icons/si';

import ObjCIcon from '../assets/icons/objective-c.svg?react';
import ProtobufIcon from '../assets/icons/protobuf.svg?react';
import PytestIcon from '../assets/icons/pytest.svg?react';
import GDBIcon from '../assets/icons/gdb.svg?react';
import ValgrindIcon from '../assets/icons/valgrind.svg?react';


type IconItem = {
    name: string;
    Icon: React.ComponentType<{ className: string }>;
};
  
  type IconGridProps = { };
  
export default function IconGrid({ }: IconGridProps): React.JSX.Element {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    
    const languages: IconItem[] = [
        { name: 'C', Icon: SiC },
        { name: 'C++', Icon: SiCplusplus },
        { name: 'Python', Icon: SiPython },
        { name: 'Java', Icon: FaJava },
        { name: 'Scala', Icon: SiScala },
        { name: 'Swift', Icon: SiSwift },
        { name: 'Bash', Icon: SiGnubash },
        { name: 'SQL', Icon: FaDatabase },
        { name: 'Objective-C', Icon: ObjCIcon },
        { name: 'JavaScript', Icon: SiJavascript },
        { name: 'TypeScript', Icon: SiTypescript },
        
    ];
      
    const technologies: IconItem[] = [
        { name: 'Git', Icon: SiGit },
        { name: 'GDB', Icon: GDBIcon },
        { name: 'Valgrind', Icon: ValgrindIcon }, 
        { name: 'Pytest', Icon: PytestIcon }, 
        { name: 'MySQL', Icon: GrMysql },
        { name: 'Make', Icon: SiGnu },
        { name: 'Protobuf', Icon: ProtobufIcon },
        { name: 'React', Icon: SiReact },
        { name: 'HTML', Icon: SiHtml5 },
        { name: 'CSS', Icon: SiCss3 },
        { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ];
    
    return (
        <div className="px-0 w-full">
            <div className="mb-8">
                <h3 className="text-white mb-4 text-xl font-medium">Languages</h3>

                <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-12">
                    {languages.map((item) => (
                        <div 
                            key={item.name}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHoveredIcon(item.name)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {hoveredIcon === item.name && (
                                <div className="absolute -top-8 bg-sky-400 text-white px-2 rounded text-sm whitespace-nowrap z-10">
                                    {item.name}
                                </div>
                            )}
                            
                            <item.Icon className={`
                                w-10 h-10 transition-all duration-300 transform
                                ${hoveredIcon === item.name ? 'text-sky-400 scale-125' : 'text-white'}
                            `} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-white mb-4 text-xl font-medium">Technologies & Frameworks</h3>

                <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-12">
                    {technologies.map((item) => (
                        <div 
                            key={item.name}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHoveredIcon(item.name)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {hoveredIcon === item.name && (
                                <div className="absolute -top-8 bg-sky-400 text-white px-2 rounded text-sm whitespace-nowrap z-10">
                                    {item.name}
                                </div>
                            )}
                            
                            <item.Icon className={`w-10 h-10 transition-all duration-300 transform ${hoveredIcon === item.name ? 'text-sky-400 scale-125' : 'text-white'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}