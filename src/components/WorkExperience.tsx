import { useState } from "react";


export type Internship = {
    id: number;
    title: string;
    company: string;
    date: string;
    image: string;
    description: string;
    technologies: string[];
};


type WorkExperienceProps = { 
    internships: Internship[];
};

export function WorkExperience( { internships }: WorkExperienceProps): React.JSX.Element {
    const [selectedInternship, setSelectedInternship] = useState<Internship>(internships[0]);

    return (
        <div className="h-auto">
            <div className="flex flex-col w-full md:flex-row border-4 border-gray-800 rounded-xl p-4">
                <div className="w-full md:w-1/3 flex flex-col space-y-4 pr-4 md:pr-4 mb-4 md:mb-0">
                    {internships.map((internship) => (
                        <div
                            key={internship.id}
                            className={`flex flex-col p-3 bg-gray-800  border-2 rounded-lg cursor-pointer 
                                transition-all duration-200 shadow-sm hover:bg-gray-700 hover:scale-105 
                                ${selectedInternship?.id === internship.id
                                    ? "border-white"
                                    : "border-transparent"
                                }
                            `}
                            onClick={() => setSelectedInternship(internship)}
                        >
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-3">
                                    <img
                                        src={internship.image}
                                        alt={`${internship.title} icon`}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">{internship.title}</h3>
                                    <p className="text-xs text-blue-200">{internship.company}</p>
                                    <p className="text-xs text-gray-400">{internship.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-2/3 bg-gray-800 text-gray-300 rounded-lg shadow-sm">
                    <div className="p-4 md:p-6">
                        <div className="mb-6">
                            <p className="text-gray-300">{selectedInternship.description}</p>
                        </div>
                        
                        <div>
                            <div className="flex flex-wrap gap-2">
                                {selectedInternship.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="text-sm text-white px-3 py-1 rounded-lg bg-blue-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}