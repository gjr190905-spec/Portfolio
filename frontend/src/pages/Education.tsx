import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EDUCATION = [
    {
        school: "Singapore Polytechnic",
        program: "Diploma in Computer Science, majoring in Cloud Computing & Cybersecurity",
        date: "Apr 2025 – Apr 2028",
        current: true,
        bullets: [
            "Previously known as Diploma in Information Technology",
            "Cumulative GPA: 3.41",
        ],
    },
    {
        school: "Institute of Technical Education (ITE)",
        program: "Higher NITEC in Cyber & Network Security",
        date: "Jan 2022 – Dec 2024",
        current: false,
        bullets: [
            "Cumulative GPA: 3.69",
            "Certificate of Merit — top 5% of the graduating cohort",
        ],
    },
];

function Education() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>EDUCATION</h2>
                <hr />
                <br />

                <p>
                    My academic path from ITE to Singapore Polytechnic, building a foundation
                    in network security before specializing further into cloud and cybersecurity.
                </p>

                <section className="pageSection">

                    <div className="timeline">
                        {EDUCATION.map((edu) => (
                            <div className={`timelineItem${edu.current ? " current" : ""}`} key={edu.school}>
                                <span className="timelineDot" />
                                <div className="timelineMeta">
                                    <span className="timelineRole">{edu.school}</span>
                                    <span className="timelineDate">{edu.date}</span>
                                </div>
                                <p style={{ color: "var(--yellow)", marginTop: 0, marginBottom: 10 }}>
                                    {edu.program}
                                </p>
                                <ul>
                                    {edu.bullets.map((bullet) => (
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

export default Education;
