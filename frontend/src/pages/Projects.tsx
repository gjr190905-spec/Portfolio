import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import banner from "../assets/images/banners/project_banner.png"
import DocumentLink from "../components/DocumentLink";
import { href } from "react-router-dom";

const PROJECTS = [
    {
        icon: "🛡️",
        imageSrc: "src/assets/images/projects/DigiForensics.png",
        imageAlt: "Digital Forensics project banner",
        kicker: "Independent Project",
        title: "Digital Forensics - Security Operations Center (SOC) Incident Investigation",
        description:
            "I acted as a Level 1 analyst in a simulated Security Operations Center, practicing digital forensics and vulnerability assessment end to end.",
        bullets: [
            "Correlated 9 SIEM alerts in Kibana and identified 5 attacker IP addresses across the US and France",
            "Traced command-and-control (C2) communication patterns",
            "Analyzed malicious scripts and outdated Flash versions with Wireshark and VirusTotal to classify malware families",
            "Documented containment steps and prevention strategies, including patch management and disabling Flash",
        ],
        tags: ["Digital Forensics", "SIEM", "Wireshark", "VirusTotal", "OSINT"],
         documents: [
            { label: "Project Presentation (PDF)", url: "public/documents/SOC/Presentation.pdf" },
            { label: "Incident Report (PDF)", url: "public/documents/SOC/Project_report.pdf" },
            { label: "Incident Ticket (PDF)", url: "public/documents/SOC/Project_ticket.pdf" },
        ],
    },
    {
        icon: "☁️",
        imageSrc: "src/assets/images/projects/CloudFund.png",
        imageAlt: "Cloud project banner",
        kicker: "Independent Project",
        title: "AWS Highly Available Cloud Infrastructure for Web Application",
        description:
            "A fault-tolerant AWS architecture built from scratch to practice real-world cloud design patterns rather than just theory.",
        bullets: [
            "Custom VPC spanning two Availability Zones with public/private subnets and route tables",
            "EC2 instances with user-data scripts for automated web deployment, sitting behind an Application Load Balancer",
            "Auto Scaling Group with a launch template and CloudWatch detailed monitoring for dynamic scaling",
            "S3 storage and IAM roles configured following least-privilege principles",
        ],
        tags: ["AWS", "VPC", "EC2", "ALB", "Auto Scaling", "RDS", "IAM"],
        documents: [
            { label: "Cloud Design Document (PDF)", url: "/documents/CloudFund/AWSCloudDesign-Documentation.pdf" },
        ],
    },
    {
        icon: "🚀",
        kicker: "Hackathon Project of Team HexaByte",
        imageSrc: "src/assets/images/projects/Regrove.png",
        imageAlt: "Hackathon banner",
        title: "Regrove (Dell InnovateDash Hackathon 2026)",
        description:
            "A case-management web app called Regrove concept built for a hackathon, aimed at helping social workers track and coordinate client cases more effectively.",
        bullets: [
            "I took on the role of a frontend engineer where I planned and ensured a comfortable-to-use app for for the team",
            "Built the frontend with React and TypeScript",
            "Designed flows for case tracking and team coordination",
            "Finished as finalists of the Hackathon",
        ],
        tags: ["React", "TypeScript", "Hackathon", "UI/UX"],
        documents: [
            { label: "Hackathon Presentation (PDF)", url: "/documents/Regrove/RegroveSlides.pdf" },
            { label: "Project Document (PDF)", url: "/documents/Regrove/DocumentRegrove.pdf" },
            { label: "Frontend Sitemap (PDF)", url: "/documents/Regrove/SitemapRegrove.pdf" },
    ],
    },
];

function Projects() {
    return (
        <div className="page">

            <Header />

            {/* ================= HERO ================= */}

            <section className="hero">

                <img
                    src={banner}
                    alt="Banner"
                />

                <div className="heroOverlay">

                    <h2>
                        My Projects
                    </h2>
                    <hr/>

                    <p>
                        Building and honing my skills
                    </p>

                </div>

            </section>

            <div className="pageBody">
            <section>
                <h2>PROJECTS</h2>
                <hr />
                <br />

                <p>
                    A mix of independent labs and real professional work: spanning cloud
                    architecture, networking, and cybersecurity.
                </p>
            </section>

                <section className="pageSection">

                    <div className="projectGrid">
                        {PROJECTS.map((project) => (
                            <article className="projectCard" key={project.title}>

                                <MediaPlaceholder 
                                icon={project.icon}
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                aspect="wide" />

                                <div className="projectBody">
                                    <span className="projectKicker">{project.kicker}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <ul>
                                        {project.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>

                                    <div className="tagRow">
                                        {project.tags.map((tag) => (
                                            <span className="tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>

                                    
                                    <div className="documentLinks">
                                        {project.documents.map((doc) => (
                                        <a
                                            key={doc.url}
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="documentItem isAvailable"
                                        >
                                         <span className="documentLabel">{doc.label}</span>
                                        </a>
                                    ))}
                                </div>
                                </div>

                            </article>
                        ))}
                    </div>

                </section>

            </div>

            <Footer />

        </div>
    );
}

export default Projects;
