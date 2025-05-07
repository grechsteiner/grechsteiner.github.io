import { useState } from 'react';

interface Experience {
  id: string;
  dates: string;
  position: string;
  company: string;
  description: string[];
  logo: string;
  isPartTime?: boolean;
}

export default function TimeLine() {
  const [experiences] = useState<Experience[]>([
    {
      id: "1",
      dates: "Sep 2024 - Dec 2024",
      position: "Software Engineer Intern",
      company: "Company",
      description: [
       "Description"
      ],
      logo: "/api/placeholder/50/50"
    },
    {
        id: "2",
        dates: "Sep 2024 - Dec 2024",
        position: "Software Engineer Intern",
        company: "Company",
        description: [
         "Description"
        ],
        logo: "/api/placeholder/50/50"
      },
      {
        id: "3",
        dates: "Sep 2024 - Dec 2024",
        position: "Software Engineer Intern",
        company: "Company",
        description: [
         "Description"
        ],
        logo: "/api/placeholder/50/50"
      },
      {
        id: "4",
        dates: "Sep 2024 - Dec 2024",
        position: "Software Engineer Intern",
        company: "Company",
        description: [
         "Description"
        ],
        logo: "/api/placeholder/50/50"
      },
  ]);

  return (
    <div className="bg-black min-h-screen text-white p-8 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex items-center mb-16">
              {/* Left or Right Alignment based on index */}
              {index % 2 === 0 ? (
                <>
                  {/* Left side content */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                      <p className="text-gray-400 mb-4">{exp.company}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Center Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Right side date */}
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-400">
                      {exp.dates}
                      {exp.isPartTime && " (Part-time)"}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Left side date */}
                  <div className="w-1/2 pr-8 text-right">
                    <p className="text-gray-400">
                      {exp.dates}
                      {exp.isPartTime && " (Part-time)"}
                    </p>
                  </div>
                  
                  {/* Center Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Right side content */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                      <p className="text-gray-400 mb-4">{exp.company}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}