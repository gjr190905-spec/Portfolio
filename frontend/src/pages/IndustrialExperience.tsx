import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import DocumentLink from "../components/DocumentLink";
import LOC from "../assets/documents/LetterOCommendation.pdf";
import banner from "../assets/images/banners/work_banner.png";

const EXPERIENCE = [
    {
        role: "IT Project Team Lead",
        org: "Sky & F Pte Ltd · Seasonal, On-site",
        date: "Dec 2025 – Present",
        current: true,
        bullets: [
            "Lead project teams in managing client communications and manpower allocation for IT infrastructure projects",
            "Coordinate issue resolution between engineers and clients to ensure smooth system deployment and operations",
            "Successfully completed 2 government projects (IT asset management) within a month while leading a team of 5–10 IT Project Engineers *",
        ],
    },
    {
        role: "Senior IT Project Engineer",
        org: "Sky & F Pte Ltd · Contract, On-site",
        date: "Jun 2024 – Present",
        current: true,
        bullets: [
            "Mentor junior engineers and support their technical and professional development",
            "Monitor system alerts and provide technical support for clients",
            "Manage client systems and contribute to infrastructure deployment and maintenance",
            "Supported infrastructure for clients, consistently ensuring high availability uptime for major government systems *",
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
            "Successfully mitigated serious system alerts from government infrastructure that would have led to massive downtime *",
            "Awarded a Letter of Commendation *",
        ],
    },
    {
        role: "Restaurant Crew Member",
        org: "Santouka Ramen · Part-Time, On-site",
        date: "Dec 2021 – May 2025",
        current: false,
        bullets: [
            "Worked in a fast-paced team environment while maintaining operational efficiency and customer service standards",
            "Developed communication, teamwork, and multitasking skills through high-volume operational support",
        ],
    },
];

function IndustrialExperience() {
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
                        Industrial Experience
                    </h2>
                    <hr/>

                    <p>
                        My real-world experience
                    </p>

                </div>

            </section>
            
            <div className="pageBody">
            <section>
                <h2>INDUSTRIAL EXPERIENCE</h2>
                <hr />
                <br />

                <p>
                    Hands-on work experience across IT infrastructure support, project
                    leadership, and government-linked systems and customer-facing
                    experience that helped build my communication skills behind all of it.
                </p>
                    <br/>
                <p>
                    <b>Note:</b> Due to my most of  my work experience being confidential government information,
                    I am only able to talk about my job scope.
                </p>
            </section>
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

                {/* ================= EVIDENCE / DOCUMENTS ================= */}

                <section className="pageSection">
                    <h2>DOCUMENTS &amp; EVIDENCE</h2>
                    <p className="pageSectionSub">Letters, records, and verification</p>

                    <div className="documentList">
                        <DocumentLink label="Letter of Commendation (Junior IT Project Engineer - Internship)" 
                        href={LOC}/>
                        <p>[-Click to view-]</p>
                    </div>
                </section>

                {/* ================= GALLERY ================= 

                <section className="pageSection">
                    <h2>ON SITE</h2>
                    <p className="pageSectionSub">Photos from project work</p>

                    <div className="mediaGrid">
                        <MediaPlaceholder caption="Deploying infrastructure on-site" icon="🖥️" />
                        <MediaPlaceholder caption="Leading the project team" icon="🧑‍💻" />
                        <MediaPlaceholder caption="System monitoring in action" icon="📡" />
                    </div>
                </section>
                    */}
            </div>

            <Footer />

        </div>
    );
}

export default IndustrialExperience;
