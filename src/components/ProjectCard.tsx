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
            className={`h-full flex flex-col p-4 rounded-lg overflow-hidden bg-gray-800
                        transform transition-transform duration-300 hover:scale-[1.03]`}
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
                    {technologies.map((technology, index) => (
                        <span key={index} className="text-sm text-white px-3 py-1 rounded-md bg-blue-700">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
