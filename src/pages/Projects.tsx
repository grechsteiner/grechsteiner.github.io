import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import ChessPlussImage from "../assets/images/ChessPlus.png";   
import DataBaseballImage from "../assets/images/DataBaseball.png";
import PersonalWebsiteImage from "../assets/images/PersonalWebsite.png";
import PyChessImage from "../assets/images/PyChess.png";
import STM32Image from "../assets/images/stm32.jpg";
import TicTacToeImage from "../assets/images/TicTacToe.png";


const projects = [
    {
        title: "Real Time Operating System",
        description: "A Real Time Operating System designed to be run on a STM32F401RE microprocessor (ARM Cortex M4) (96KB RAM, 512KB on-chip flash memory) packaged in an STM Nucleo-64 board",
        image: STM32Image,
        githubURL: "https://github.com/grechsteiner/RTX",
        technologies: ["C"]   
    },
    {
        title: "ChessPluss",
        description: "C++ OOP Chess Project",
        image: ChessPlussImage,
        githubURL: "https://github.com/grechsteiner/ChessPlus",
        technologies: ["C++", "Make", "GDB", "Valgrind"]   
    },
    {
        title: "DataBaseball",
        description: "Web app for exploring historical baseball stats, built with Python, MySQL, Make, JavaScript, Node.js, and React",
        image: DataBaseballImage,
        githubURL: "https://github.com/grechsteiner/DataBaseball",
        technologies: ["Python", "MySQL", "Make", "JavaScript", "Node.js", "React"]   
    },
    // {
    //     title: "SE27 Degree Planner",
    //     description: "xyz",
    //     image: SampleImage,
    //     githubURL: "https://github.com/grechsteiner/ChessPlus",
    //     technologies: ["Python", "MySQL", "Make", "TypeScript", "JavaScript", "Node.js", "React"]  
    // },
    {
        title: "Personal Website",
        description: "This very website!",
        image: PersonalWebsiteImage,
        githubURL: "https://github.com/grechsteiner/GRPersonalWebsite",
        technologies: ["TypeScript", "JavaScript", "React", "Tailwind CSS"]   
    },
    {
        title: "PyChess",
        description: "Full GUI Python Chess Project With AI Opponent",
        image: PyChessImage,
        githubURL: "https://github.com/grechsteiner/PyChess",
        technologies: ["Python", "PyGame"]   
    },
    {
        title: "Tic-Tac-Toe",
        description:"Python Tic-Tac-Toe Game With AI Opponent and Voice Input",
        image: TicTacToeImage,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["Python", "PyGame"]   
    }
]


type ProjectProps = { };
  
export default function Project({ }: ProjectProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <div className="container mx-auto py-2">            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubURL={project.githubURL}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}
