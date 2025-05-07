import GitHubIcon from '../assets/icons/github.svg?react';

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    githubURL: string;
    technologies: string[];
};

export default function ProjectCard({ title, description, image, githubURL, technologies }: ProjectCardProps): React.JSX.Element {
    return (
        <div 
            className={`rounded-lg overflow-hidden shadow-lg bg-gray-800 p-4 
                       transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] 
                       h-full flex flex-col`}
        >
            <div className="rounded-lg overflow-hidden relative mb-4 flex-shrink-0" style={{ minHeight: "12rem" }}>
                <img 
                    className="w-full h-full object-cover" 
                    src={image} 
                    alt={title} 
                />
                <a
                    href={githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 group flex items-center justify-center"
                    aria-label="GitHub"
                >
                    <div className="bg-black bg-opacity-70 rounded-full p-2">
                        <GitHubIcon className="w-6 h-6 text-white group-hover:text-sky-400 transition-colors transform group-hover:scale-110 transition-transform" />
                    </div>
                </a>
            </div>
          
            <div className="flex-grow flex flex-col">
                <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
                
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 rounded text-white bg-sky-400">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
