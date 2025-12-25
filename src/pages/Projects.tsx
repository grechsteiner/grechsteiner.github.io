import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import ChessPlusImage from "../../public/images/ChessPlus.png";   
import DataBaseballImage from "../../public/images/DataBaseball.png";
import PersonalWebsiteImage from "../../public/images/PersonalWebsite.png";
import PyChessImage from "../../public/images/PyChess.png";
import STM32Image from "../../public/images/stm32.jpg";
import TicTacToeImage from "../../public/images/TicTacToe.png";


const projects = [
    {
        title: "RTOS",
        description: "A Real Time Operating System designed to be run on a STM32F401RE microprocessor (ARM Cortex M4) (96KB RAM, 512KB on-chip flash memory) packaged in an STM Nucleo-64 board",
        image: STM32Image,
        githubURL: "https://github.com/grechsteiner/RTOS",
        technologies: ["C"]   
    },
    {
        title: "ChessPlus",
        description: "C++ OOP Chess Project",
        image: ChessPlusImage,
        githubURL: "https://github.com/grechsteiner/ChessPlus",
        technologies: ["C++", "Make", "GDB", "Valgrind"]   
    },
    {
        title: "DataBaseball",
        description: "Web app for exploring historical baseball stats",
        image: DataBaseballImage,
        githubURL: "https://github.com/grechsteiner/DataBaseball",
        technologies: ["Python", "MySQL", "Make", "JavaScript", "Node.js", "React"]   
    },
    // {
    //     title: "SE27 Degree Planner",
    //     description: "xyz",
    //     image: SampleImage,
    //     githubURL: "tbd",
    //     technologies: ["Python", "MySQL", "Make", "TypeScript", "JavaScript", "Node.js", "React"]  
    // },
    {
        title: "Personal Website",
        description: "This very website!",
        image: PersonalWebsiteImage,
        githubURL: "https://github.com/grechsteiner/grechsteiner.github.io",
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
        githubURL: "https://github.com/grechsteiner/Tic-Tac-Toe",
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
