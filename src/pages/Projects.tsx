import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import ChessPlussImage from "../assets/images/ChessPlus.png";   
import DataBaseballImage from "../assets/images/DataBaseball.png";
import SampleImage from "../assets/images/sample.png";
import PersonalWebsiteImage from "../assets/images/PersonalWebsite.png";
import PyChessImage from "../assets/images/PyChess.png";
import TicTacToeImage from "../assets/images/TicTacToe.png";


const projects = [
    {
        title: "ChessPluss",
        description: "C++ OOP Chess Project",
        image: ChessPlussImage,
        githubURL: "https://github.com/grechsteiner/ChessPlus",
        technologies: ["C++", "Make", "GDB", "Valgrind"]   
    },
    {
        title: "DataBaseball",
        description: "Web app for exploring historical baseball stats, built with Python, Node.js, MySQL, React, Make",
        image: DataBaseballImage,
        githubURL: "https://github.com/grechsteiner/DataBaseball",
        technologies: ["Python", "MySQL", "JavaScript", "Node.js", "React", "Make"]   
    },
    {
        title: "Simple Operating System",
        description: "xyz",
        image: SampleImage,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["C"]   
    },
    {
        title: "Personal Website",
        description: "This very website!",
        image: PersonalWebsiteImage,
        githubURL: "https://github.com/grechsteiner/GRPersonalWebsite",
        technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"]   
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
