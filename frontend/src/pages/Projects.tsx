import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PROJECTS = [
    {
        icon: "☁️",
        kicker: "Independent Project",
        title: "AWS Home Lab",
        description:
            "A fault-tolerant AWS architecture built from scratch to practice real-world cloud design patterns rather than just theory.",
        bullets: [
            "Custom VPC spanning two Availability Zones with public/private subnets and route tables",
            "EC2 instances with user-data scripts for automated web deployment, sitting behind an Application Load Balancer",
            "Auto Scaling Group with a launch template and CloudWatch detailed monitoring for dynamic scaling",
            "S3 storage and IAM roles configured following least-privilege principles",
        ],
        tags: ["AWS", "VPC", "EC2", "ALB", "Auto Scaling", "RDS", "IAM"],
    },
    {
        icon: "🏛️",
        kicker: "Professional Experience",
        title: "Government Infrastructure Support",
        description:
            "Ongoing hands-on work supporting IT infrastructure for government-linked systems, from monitoring through to on-site deployment.",
        bullets: [
            "Supported infrastructure projects for agencies including ICA, URA, and MSF",
            "Monitored system alerts and resolved issues before they caused downtime",
            "Led a team of 5–10 IT Project Engineers to deliver 2 government IT asset management projects within a month",
            "Received a Letter of Commendation for mitigating serious system alerts",
        ],
        tags: ["Infrastructure", "Monitoring", "Project Leadership", "Government IT"],
    },
    {
        icon: "🐧",
        kicker: "Independent Project",
        title: "Linux Server Deployment",
        description:
            "Provisioning, hardening, and maintaining Linux servers across a range of distributions as part of ongoing systems administration practice.",
        bullets: [
            "Deployed and configured services across Ubuntu, Debian, and Red Hat environments",
            "Practiced user/permission management, package management, and basic hardening",
            "Applied the same Linux fundamentals used daily in production infrastructure support",
        ],
        tags: ["Linux", "Ubuntu", "Debian", "Red Hat", "Sysadmin"],
    },
    {
        icon: "🌐",
        kicker: "Independent Project",
        title: "Network Troubleshooting Project",
        description:
            "Applied structured troubleshooting methodology to diagnose and resolve connectivity and performance issues across a lab network environment.",
        bullets: [
            "Practiced systematic fault isolation across TCP/IP layers",
            "Used packet capture and traffic analysis to pinpoint root causes",
            "Documented findings and resolution steps for repeatability",
        ],
        tags: ["TCP/IP", "Troubleshooting", "Cisco", "Networking"],
    },
    {
        icon: "🛡️",
        kicker: "Independent Project",
        title: "Cybersecurity Lab — SOC Investigation",
        description:
            "Acted as a Level 1 analyst in a simulated Security Operations Center, practicing digital forensics and vulnerability assessment end to end.",
        bullets: [
            "Correlated 9 SIEM alerts in Kibana and identified 5 attacker IP addresses across the US and France",
            "Traced command-and-control (C2) communication patterns",
            "Analyzed malicious scripts and outdated Flash versions with Wireshark and VirusTotal to classify malware families",
            "Documented containment steps and prevention strategies, including patch management and disabling Flash",
        ],
        tags: ["Digital Forensics", "SIEM", "Wireshark", "VirusTotal", "OSINT"],
    },
    {
        icon: "🚀",
        kicker: "Hackathon Project",
        title: "Regrove",
        description:
            "A case-management web app concept built for a hackathon, aimed at helping social workers track and coordinate client cases more effectively.",
        bullets: [
            "Built the frontend with React and TypeScript",
            "Designed flows for case tracking and team coordination",
            "Built under hackathon time constraints as part of ongoing hackathon experience alongside PolyFinTech100 (NETS) and DELL SP InnovateDash",
        ],
        tags: ["React", "TypeScript", "Hackathon", "UI/UX"],
    },
];

function Projects() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>PROJECTS</h2>
                <hr />
                <br />

                <p>
                    A mix of independent labs and real professional work — spanning cloud
                    architecture, Linux administration, networking, and cybersecurity.
                    Write-ups below; screenshots and live links are being added as I package
                    each project up properly.
                </p>

                <section className="pageSection">

                    <div className="projectGrid">
                        {PROJECTS.map((project) => (
                            <article className="projectCard" key={project.title}>

                                <div className="projectVisual">
                                    {project.icon}
                                </div>

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
                                </div>

                            </article>
                        ))}
                    </div>

                </section>

                <span className="pageBadge">Screenshots &amp; live links coming soon</span>

            </div>

            <Footer />

        </div>
    );
}

export default Projects;
