import Layout from "../components/Layout";
import { Internship, WorkExperience } from "../components/WorkExperience";

import TenstorrentLogo from "../../public/images/tenstorrentLogo.jpeg";
import FaireLogo from "../../public/images/faireLogo.jpeg";
import OurGroceriesLogo from "../../public/images/ourgroceriesLogo.jpeg";


const internships: Internship[] = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Tenstorrent",
        date: "Jan 2026 - Present",
        image: TenstorrentLogo,
        description: "Writing collective communication neural network operations for Tenstorrent AI accelerators as a member of the kernel acceleration team, check out my work ",
        urlText: "here",
        url: "https://github.com/tenstorrent/tt-metal/pulls?q=is%3Apr+author%3AgrechsteinerTT+is%3Aclosed",
        technologies: ["C", "C++", "Python", "Pytest"]
    },
    {
        id: 2,
        title: "Software Engineer Intern (part-time during school)",
        company: "Tenstorrent",
        date: "Sept 2025 - Dec 2025",
        image: TenstorrentLogo,
        description: "Writing collective communication neural network operations for Tenstorrent AI accelerators as a member of the kernel acceleration team, check out my work ",
        urlText: "here",
        url: "https://github.com/tenstorrent/tt-metal/pulls?q=is%3Apr+author%3AgrechsteinerTT+is%3Aclosed",
        technologies: ["C", "C++", "Python", "Pytest"]
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        company: "Tenstorrent",
        date: "May 2025 - Aug 2025",
        image: TenstorrentLogo,
        description: "Writing collective communication neural network operations for Tenstorrent AI accelerators as a member of the kernel acceleration team, check out my work ",
        urlText: "here",
        url: "https://github.com/tenstorrent/tt-metal/pulls?q=is%3Apr+author%3AgrechsteinerTT+is%3Aclosed",
        technologies: ["C", "C++", "Python", "Pytest"]
    },
    {
        id: 4,
        title: "iOS Engineer Intern",
        company: "Faire",
        date: "Sept 2024 - Dec 2024",
        image: FaireLogo,
        description: "Shipping iOS features as a member of the growth team",
        technologies: ["Swift", "SwiftUI", "SwiftyMocky", "Swinject", "Protobuf"]
    },
    {
        id: 5,
        title: "Software Developer Intern",
        company: "OurGroceries, Inc.",
        date: "Jan 2024 - Apr 2024",
        image: OurGroceriesLogo,
        description: "Led project for extracting and processing natural language measurement units",        
        technologies: ["C++", "Make", "GDB", "Valgrind", "Objective-C", "Bash"]
    },
    {
        id: 6,
        title: "Software Developer Intern",
        company: "OurGroceries, Inc.",
        date: "May 2023 - Aug 2023",
        image: OurGroceriesLogo,
        description: "Localized the entire iOS app, including automation of all translation processes",
        technologies: ["C++", "Objective-C", "Bash", "Python", "Java", "XMLStarlet", "Make"]
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
