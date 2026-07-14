import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HOBBIES = [
    {
        icon: "🚩",
        title: "CTFs & Competitions",
        body: "I compete in Capture The Flag events like Gryphons CTF and GreyCTF, tackling OSINT, web, and forensics challenges for fun as much as practice.",
    },
    {
        icon: "🤝",
        title: "Cybersecurity Club",
        body: "Active subcommittee member of Gryphons, my school's cybersecurity student interest club, helping organize events and challenges for other students.",
    },
    {
        icon: "💡",
        title: "Hackathons",
        body: "I enjoy the pressure-cooker environment of hackathons — competed in PolyFinTech100 2025 by NETS and currently taking part in the DELL SP InnovateDash 2026.",
    },
    {
        icon: "🖥️",
        title: "Tinkering",
        body: "Outside of work, I like spinning up home lab environments to try out new AWS services, Linux distros, and security tools just to see how they break.",
    },
];

function Hobbies() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>HOBBY AND OTHERS</h2>
                <hr />
                <br />

                <p>
                    A look at what I get up to outside of client work — mostly things that
                    overlap with tech, but a good example of what keeps me curious.
                </p>

                <section className="pageSection">

                    <div className="grid2">
                        {HOBBIES.map((item) => (
                            <div className="infoCard" key={item.title}>
                                <span className="certIcon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>

                </section>

                <span className="pageBadge">More to add here soon</span>

            </div>

            <Footer />

        </div>
    );
}

export default Hobbies;
