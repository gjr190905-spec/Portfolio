import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import banner from "../assets/images/banners/home_banner.png";
import profilePicture from "../assets/images/profile/Pic.png";

const QUICK_STATS = [
    { value: "Networking", label: "Core Skill" },
    { value: "~3 Years", label: "IT Work Experience" },
    { value: "Government", label: "Infrastructure Projects" },
    { value: "Linux", label: "Systems" },
    { value: "AWS", label: "Cloud Platform" },
];

const HIGHLIGHTS = [
    {
        title: "Government Infrastructure Projects",
        body: "I contributed to IT infrastructure work for government-linked projects, covering deployment, configuration and ongoing support.",
    },
    {
        title: "Cloud & Systems",
        body: "Hands-on experience provisioning and managing workloads on AWS, alongside Linux administration.",
    },
    {
        title: "Network Engineering",
        body: "Solid grounding in networking fundamentals like routing, switching, and troubleshooting across enterprise environments.",
    },
    {
        title: "Defensive Cybersecurity",
        body: "Growing focus on defensive security practices, from hardening systems to monitoring for and responding to threats.",
    },
];

const SKILL_GROUPS = [
    {
        title: "Cloud & Infrastructure",
        skills: ["AWS", "EC2 / S3 / IAM", "Load-Balancing", "RDS"],
    },
    {
        title: "Operating Systems",
        skills: ["Kali Linux", "Ubuntu Linux", "Redhat Linux", "Debian Linux", "Windows (10, 11, Servers)"],
    },
    {
        title: "Networking",
        skills: ["TCP/IP", "Routing & Switching", "Firewalls", "Network Configuration", "Network Security"],
    },
    {
        title: "Cybersecurity",
        skills: ["Defensive Security", "Threat Monitoring", "Ethical Hacking", "Digital Forensics", "SIEM"],
    },
];

function Home() {
    return (
        <div className="home">

            <Header />

            {/* ================= HERO ================= */}

            <section className="hero">

                <img
                    src={banner}
                    alt="Banner"
                />

                <div className="heroOverlay">

                    <h2>
                        Gan Jia Riang, Matthew
                    </h2>
                    <hr/>

                    <p>
                    IT Project Engineer | Cloud | Defensive Cybersecurity | Networks
                    </p>

                </div>

            </section>

            {/* ================= PROFILE ================= */}

            <section className="profile">

                <div className="avatar">
                    <img
                    src={profilePicture}
                    alt="profile picture"
                />
                </div>

                <div className="profileMain">

                    <h2>Welcome to my portfolio</h2>
                    <hr />
                    <br />

                    <p>
                        
                        You may call me <b>Jia Riang</b> or <b>Matthew.</b>
                        <br />
                        I am a Computer Science student from Singapore Polytechnic 
                        specializing in <b>Cybersecurity & Cloud Computing.</b>
                    </p>

                    <p>FUN FACT: I am also working part-time as an <b>IT Project Engineer</b>, 
                        sometimes as a <b>Project Team Lead</b> when my company requires me to.</p>

                    <div className="ctaButtons">

                        <a href="/projects" className="btn btnPrimary">
                            View Projects
                        </a>

                        <a href="/resume.pdf" download className="btn btnSecondary">
                            Download Resume
                        </a>

                    </div>

                </div>

            </section>

            {/* ================= QUICK STATS ================= */}

            <div className="quickStats">

                {QUICK_STATS.map((stat) => (
                    <div className="statCard" key={stat.label}>
                        <span className="statValue">{stat.value}</span>
                        <span className="statLabel">{stat.label}</span>
                    </div>
                ))}

            </div>

            {/* ================= HIGHLIGHTS ================= */}

            <section className="highlights">

                <h2>HIGHLIGHTS</h2>
                <hr/>
                
                <br/>
                <div className="highlightGrid">

                    {HIGHLIGHTS.map((item) => (
                        <div className="highlightCard" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))}

                </div>

            </section>

            {/* ================= TECHNICAL SKILLS ================= */}

            <section className="skills">

                <h2>TECHNICAL SKILLS</h2>
                <hr/>

                <br/>
                <div className="skillGroups">

                    {SKILL_GROUPS.map((group) => (
                        <div className="skillGroup" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="skillPills">
                                {group.skills.map((skill) => (
                                    <span className="skillPill" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            {/* ================= CONTENT ================= */}

            <main className="content">

                <section className="card">

                    <h2>CURRENT STATUS</h2>

                    <ul>

                        <li>Diploma in Computer Science</li>

                        <li>Cyber Security Enthusiast</li>

                        <li>IT Project Engineer + Project Team Lead</li>

                        <li>Learning Cloud & Infrastructure</li>

                    </ul>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Home;
