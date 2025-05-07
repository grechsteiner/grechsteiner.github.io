import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import Im from "../assets/images/sample.png";


type ProjectProps = {
    
};

const projects = [
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio showcasing projects and skills with a modern design.",
        image: Im,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"]   
    },
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio showcasing projects and skills with a modern design.",
        image: Im,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"]   
    },
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio showcasing projects and skills with a modern design.",
        image: Im,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"]   
    },
    {
        title: "Portfolio Website",
        description: "My personal developer portfolio showcasing projects and skills with a modern design.",
        image: Im,
        githubURL: "https://github.com/username/portfolio",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"]   
    }
]
  
export default function Project({ }: ProjectProps): React.JSX.Element {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">            
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
