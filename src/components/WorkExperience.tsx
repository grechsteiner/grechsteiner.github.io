import { useState } from "react";

// Define the data structure for our options
type Option = {
  id: number;
  title: string;
  image: string;
  bulletPoints: string[];
};

// Sample data for the options
const optionsData: Option[] = [
  {
    id: 1,
    title: "Option 1",
    image: "/api/placeholder/48/48",
    bulletPoints: [
      "First bullet point for Option 1",
      "Second bullet point for Option 1",
      "Third bullet point for Option 1",
      "Fourth bullet point for Option 1",
      "Fifth bullet point for Option 1",
      "Sixth bullet point for Option 1",
    ],
  },
  {
    id: 2,
    title: "Option 2",
    image: "/api/placeholder/48/48",
    bulletPoints: [
      "First bullet point for Option 2",
      "Second bullet point for Option 2",
      "Third bullet point for Option 2",
      "Fourth bullet point for Option 2",
      "Fifth bullet point for Option 2",
      "Sixth bullet point for Option 2",
    ],
  },
  {
    id: 3,
    title: "Option 3",
    image: "/api/placeholder/48/48",
    bulletPoints: [
      "First bullet point for Option 3",
      "Second bullet point for Option 3",
      "Third bullet point for Option 3",
      "Fourth bullet point for Option 3",
      "Fifth bullet point for Option 3",
      "Sixth bullet point for Option 3",
    ],
  },
  {
    id: 4,
    title: "Option 4",
    image: "/api/placeholder/48/48",
    bulletPoints: [
      "First bullet point for Option 4",
      "Second bullet point for Option 4",
      "Third bullet point for Option 4",
      "Fourth bullet point for Option 4",
      "Fifth bullet point for Option 4",
      "Sixth bullet point for Option 4",
    ],
  }
];

export default function WorkExperience() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(optionsData[0]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(prev => (prev?.id === option.id ? null : option));
  };

  return (
    <div className="flex flex-row w-full bg-gray-100 rounded-xl p-4 md:p-6">
      {/* Options column */}
      <div className="w-1/3 flex flex-col space-y-3 pr-4">
        {optionsData.map((option) => (
          <div
            key={option.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 shadow-sm ${
              selectedOption?.id === option.id
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-50"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <div className="flex-shrink-0 mr-3">
              <img
                src={option.image}
                alt={`${option.title} icon`}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <h3 className="font-medium">{option.title}</h3>
          </div>
        ))}
      </div>

      {/* Bullet points column */}
      <div className="w-2/3 bg-white rounded-lg shadow-sm ml-2">
        {selectedOption ? (
          <div className="p-4 md:p-6">
            <ul className="list-disc pl-5 space-y-2 md:space-y-3">
              {selectedOption.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex items-center justify-center p-6 text-gray-500">
            Select an option to view details
          </div>
        )}
      </div>
    </div>
  );
}