import Layout from "../components/Layout";
import { Internship, WorkExperience } from "../components/WorkExperience";

import TenstorrentLogo from "../assets/images/tenstorrentLogo.jpeg";
import FaireLogo from "../assets/images/faireLogo.jpeg";
import OurGroceriesLogo from "../assets/images/ourgroceriesLogo.jpeg";


const internships: Internship[] = [
    {
        id: 1,
        title: "Software Engineering Intern",
        company: "Tenstorrent",
        date: "May 2025 - Present",
        image: TenstorrentLogo,
        description: "Led development of a web application for healthcare providers, focusing on improving patient care workflows and data visualization. Implemented real-time analytics dashboard that reduced decision-making time by 30%.",
        technologies: ["C++"]
    },
    {
        id: 2,
        title: "iOS Engineer Intern",
        company: "Faire",
        date: "Sept 2024 - Dec 2024",
        image: FaireLogo,
        description: "Developed responsive user interfaces for fintech applications with focus on accessibility and performance. Reduced load times by 45% through code optimization and implementation of lazy loading strategies.",
        technologies: ["Swift", "SwiftUI", "SwiftyMocky", "Swinject", "Protobuf", "Jenkins"]
    },
    {
        id: 3,
        title: "Software Developer Intern",
        company: "OurGroceries, Inc.",
        date: "Jan 2024 - Apr 2024",
        image: OurGroceriesLogo,
        description: "Assisted in the development of e-commerce platforms. Responsible for building reusable components and fixing bugs in the existing codebase. Participated in daily stand-ups and sprint planning.",
        technologies: ["C++", "Make", "GDB", "Valgrind", "Objective-C", "Bash"]
    },
    {
        id: 4,
        title: "Software Developer Intern",
        company: "OurGroceries, Inc.",
        date: "May 2023 - Aug 2023",
        image: OurGroceriesLogo,
        description: "Created wireframes and prototypes for mobile applications. Conducted user research and usability testing to improve product designs. Collaborated with developers to ensure design implementation fidelity.",
        technologies: ["C++", "Objective-C", "Bash", "Python", "Java", "XMLStarlet"]
    }
];


type WorkProps = { };
  
export default function Work({ }: WorkProps): React.JSX.Element {
    return (
        <Layout allowScroll={true}>
            <WorkExperience internships={internships}/>
        </Layout>
    );
}
