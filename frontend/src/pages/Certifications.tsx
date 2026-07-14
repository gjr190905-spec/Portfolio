import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CERTIFICATIONS = [
    {
        icon: "🎓",
        title: "Certified Security Specialist",
        org: "EC-Council",
    },
    {
        icon: "🎓",
        title: "Certified Secure Computer User",
        org: "EC-Council",
    },
    {
        icon: "🎓",
        title: "Foundation Level Threat Intelligence Analyst",
        org: "arcX",
    },
    {
        icon: "☁️",
        title: "AWS Cloud Foundations (Trained)",
        org: "Amazon Web Services",
    },
];

const ACHIEVEMENTS = [
    {
        icon: "🏆",
        title: "Letter of Commendation",
        org: "Sky & F Pte Ltd — Junior IT Project Engineer",
    },
    {
        icon: "🥇",
        title: "Certificate of Merit",
        org: "ITE — Top 5% of Higher NITEC Cyber & Network Security cohort",
    },
    {
        icon: "🚩",
        title: "Gryphons CTF & GreyCTF",
        org: "OSINT, Web, and Forensics categories",
    },
    {
        icon: "💡",
        title: "PolyFinTech100 Hackathon 2025",
        org: "Organized by NETS",
    },
    {
        icon: "💡",
        title: "DELL SP InnovateDash 2026",
        org: "Organized by DELL — currently competing",
    },
    {
        icon: "🤝",
        title: "Gryphons Subcommittee Member",
        org: "Cybersecurity student interest club",
    },
];

function Certifications() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>CERTIFICATIONS &amp; ACHIEVEMENTS</h2>
                <hr />
                <br />

                <p>
                    Certifications, competitions, and recognition earned while building toward
                    a career in cloud and cybersecurity.
                </p>

                <section className="pageSection">
                    <h2>CERTIFICATIONS</h2>
                    <p className="pageSectionSub">Industry certifications and training</p>

                    <div className="certGrid">
                        {CERTIFICATIONS.map((cert) => (
                            <div className="certCard" key={cert.title}>
                                <span className="certIcon">{cert.icon}</span>
                                <h3>{cert.title}</h3>
                                <p>{cert.org}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pageSection">
                    <h2>ACHIEVEMENTS</h2>
                    <p className="pageSectionSub">Awards, competitions, and recognition</p>

                    <div className="certGrid">
                        {ACHIEVEMENTS.map((item) => (
                            <div className="certCard" key={item.title}>
                                <span className="certIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.org}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            <Footer />

        </div>
    );
}

export default Certifications;
