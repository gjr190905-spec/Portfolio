import "../styles/Page.css";
import "../styles/Home.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/images/banners/about_banner.png";

const JOURNEY = [
    {
        role: "Junior IT Project Engineer",
        org: "Sky & F Pte Ltd · Internship",
        date: "Oct 2023 – May 2024",
        body: "Started out monitoring system alerts and providing hands-on technical support to keep client systems stable — including hardware troubleshooting and UPS replacements on government infrastructure.",
        current: false,
    },
    {
        role: "Senior IT Project Engineer",
        org: "Sky & F Pte Ltd · Part-Time",
        date: "Jun 2024 – Present",
        body: "Grew into mentoring junior engineers, managing client systems, and helping keep major government systems running with high availability.",
        current: false,
    },
    {
        role: "Project Team Lead",
        org: "Sky & F Pte Ltd · Seasonal",
        date: "Dec 2025 – Present",
        body: "Now lead small project teams end-to-end — coordinating client communications, manpower, and issue resolution between engineers and clients on government infrastructure projects.",
        current: true,
    },
];

const INTERESTS = [
    {
        title: "Cloud",
        body: "Designing and running infrastructure on AWS — VPCs, EC2, load balancing, auto scaling, and everything in between.",
    },
    {
        title: "Cybersecurity",
        body: "Defensive security, digital forensics, and threat monitoring — figuring out how systems get attacked so I can help stop it.",
    },
    {
        title: "Infrastructure Engineering",
        body: "Keeping critical systems reliable — from Linux administration to networking to on-the-ground troubleshooting.",
    },
];

function AboutMe() {
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
                        About Me
                    </h2>
                    <hr/>

                    <p>
                    Gan Jia Riang, Matthew
                    </p>

                </div>

            </section>

            <div className="pageBody">
            
                {/* ================= Introduction ================= */}
                <section>
                <h2>Introduction</h2>
                <hr />
                <br />

                <p>
                    I'm Jia Riang, also known as Matthew a Diploma in Computer Science 
                    (Previously known as Diploma in Information Technology) student at Singapore Polytechnic 
                    specializing in <b>Cloud Computing &amp; Cybersecurity</b>, and a part-time <b>IT Project
                    Engineer</b> supporting government infrastructure projects with Sky &amp; F Pte Ltd.
                    Along the way, I've worked on infrastructure projects for agencies including
                    ICA, URA, and MSF, which is where most of my hands-on IT experience comes from.
                </p>
                </section>


                {/* ================= JOURNEY ================= */}

                <section className="pageSection">
                    <h2>MY JOURNEY</h2>
                    <p className="pageSectionSub">From Junior Engineer to Project Team Lead</p>

                    <div className="timeline">
                        {JOURNEY.map((step) => (
                            <div className={`timelineItem${step.current ? " current" : ""}`} key={step.role}>
                                <span className="timelineDot" />
                                <div className="timelineMeta">
                                    <span className="timelineRole">{step.role}</span>
                                    <span className="timelineOrg">{step.org}</span>
                                    <span className="timelineDate">{step.date}</span>
                                </div>
                                <p>{step.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= INTERESTS ================= */}

                <section className="pageSection">
                    <h2>WHAT I CARE ABOUT</h2>
                    <p className="pageSectionSub">The areas I keep gravitating toward</p>

                    <div className="grid3">
                        {INTERESTS.map((item) => (
                            <div className="infoCard" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= GOAL ================= */}

                <section className="pageSection">
                    <h2>WHERE I'M HEADED</h2>
                    <div className="infoCard">
                        <p>
                            My goal is to grow into a <b>Cloud / Security Engineer</b> role — combining
                            what I've learned supporting government infrastructure with deeper expertise
                            in AWS cloud architecture and defensive cybersecurity. I'm available for a
                            1-year internship commencing March 2027.
                        </p>
                    </div>
                </section>

                <span className="pageBadge">More coming as I keep building</span>

            </div>

            <Footer />

        </div>
    );
}

export default AboutMe;
