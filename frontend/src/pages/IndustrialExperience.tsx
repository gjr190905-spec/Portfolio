import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EXPERIENCE = [
    {
        role: "Project Team Lead",
        org: "Sky & F Pte Ltd · Seasonal, On-site",
        date: "Dec 2025 – Present",
        current: true,
        bullets: [
            "Lead project teams in managing client communications and manpower allocation for IT infrastructure projects",
            "Coordinate issue resolution between engineers and clients to ensure smooth system deployment and operations",
            "Successfully completed 2 government projects (IT asset management) within a month while leading a team of 5–10 IT Project Engineers",
        ],
    },
    {
        role: "Senior IT Project Engineer",
        org: "Sky & F Pte Ltd · Part-Time, On-site",
        date: "Jun 2024 – Present",
        current: true,
        bullets: [
            "Mentor junior engineers and support their technical and professional development",
            "Monitor system alerts and provide technical support for clients",
            "Manage client systems and contribute to infrastructure deployment and maintenance",
            "Supported infrastructure for ICA, URA, and MSF, consistently ensuring high availability uptime for major government systems",
        ],
    },
    {
        role: "Junior IT Project Engineer",
        org: "Sky & F Pte Ltd · Internship, On-site",
        date: "Oct 2023 – May 2024",
        current: false,
        bullets: [
            "Monitored system alerts and provided technical support to ensure system stability for clients",
            "Performed hardware troubleshooting including UPS (Uninterruptible Power Supply) replacement and system maintenance",
            "Successfully mitigated serious system alerts from government infrastructure that would have led to massive downtime",
            "Awarded a Letter of Commendation",
        ],
    },
    {
        role: "[ Your role — e.g. Crew Member / Service Staff ]",
        org: "[ Restaurant name ] · [ Part-Time ]",
        date: "[ Add dates ]",
        current: false,
        bullets: [
            "[ This entry is a placeholder — send over the restaurant name, your role, dates, and a couple of responsibilities and I'll fill this in properly. ]",
            "Front-of-house / customer service experience is genuinely worth including — it shows communication and teamwork skills that complement the technical roles above.",
        ],
    },
];

function IndustrialExperience() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>INDUSTRIAL EXPERIENCE</h2>
                <hr />
                <br />

                <p>
                    Hands-on work experience across IT infrastructure support, project
                    leadership, and government-linked systems — plus earlier customer-facing
                    experience that helped build the communication skills behind all of it.
                </p>

                <section className="pageSection">

                    <div className="timeline">
                        {EXPERIENCE.map((job) => (
                            <div className={`timelineItem${job.current ? " current" : ""}`} key={job.role}>
                                <span className="timelineDot" />
                                <div className="timelineMeta">
                                    <span className="timelineRole">{job.role}</span>
                                    <span className="timelineOrg">{job.org}</span>
                                    <span className="timelineDate">{job.date}</span>
                                </div>
                                <ul>
                                    {job.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </section>

            </div>

            <Footer />

        </div>
    );
}

export default IndustrialExperience;
