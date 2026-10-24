import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DocumentLink from "../components/DocumentLink";
import CSS from "../assets/images/certificates/CSS-ECCOUNCIL.png"
import CSCU from "../assets/images/certificates/CSCU-ECCOUNCIL.png"
import redh from "../assets/images/certificates/RetHat.png"
import awsfund from "../assets/images/certificates/aws-badge.png"
import arcx from "../assets/images/certificates/arcx.jpg"
import MediaPlaceholder from "../components/MediaPlaceholder";
import banner from "../assets/images/banners/cert_banner.png"

const CERTIFICATIONS = [
    {
        icon: "🎓",
        title: "Certified Security Specialist",
        org: "EC-Council",
        doc: "View Certificate",
    },
    {
        icon: "🎓",
        title: "Certified Secure Computer User",
        org: "EC-Council",
        doc: "View Certificate",
    },
    {
        icon: "🎓",
        title: "Foundation Level Threat Intelligence Analyst",
        org: "arcX",
        doc: "View Certificate",
    },
    {
        icon: "☁️",
        title: "AWS Cloud Foundations (Trained)",
        org: "Amazon Web Services",
        doc: "View Badge",
    },
];

const ACHIEVEMENTS = [
    {
        icon: "🚩",
        title: "Gryphons CTF & GreyCTF",
        org: "OSINT, Web, and Forensics categories",
        doc: "View Certificate of Participation",
    },
    {
        icon: "💡",
        title: "PolyFinTech100 Hackathon 2025",
        org: "Organized by NETS",
        doc: "View Certificate of Participation",
    },
    {
        icon: "💡",
        title: "DELL SP InnovateDash 2026",
        org: "Organized by DELL — currently competing",
        doc: undefined,
    },
    {
        icon: "🤝",
        title: "Gryphons Subcommittee Member",
        org: "Cybersecurity student interest club",
        doc: undefined,
    },
];

function Certifications() {
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
                        CERTIFICATIONS &amp; training
                    </h2>
                    <hr/>

                    <p>
                        Recognition and training
                    </p>

                </div>

            </section>

            <div className="pageBody">

                <h2>CERTIFICATIONS &amp; Badges</h2>
                <hr />
                <br />

                <p>
                    Certifications and Badges earned while building toward
                    a career in cloud and cybersecurity.
                </p>

                 {/* ================= GALLERY ================= */}

                <section className="pageSection">
                    <div className="mediaGrid">

                        <MediaPlaceholder caption="(EC-Council) Certified Security Specialist"
                            src={CSS}
                            alt="Certified Security Specialist EC-Council"/>

                        <MediaPlaceholder caption="(Red Hat) Linux Red Hat System Administration 1"
                            src={redh}
                            alt="Red Hat System Administration 1"/>

                        <MediaPlaceholder caption="(Amazon Web Services) AWS Cloud Foundations - Trained"
                            src={awsfund}
                            alt="AWS Cloud Foundations - Trained"/>

                        <MediaPlaceholder caption="(arcX) Foundation Level Threat Intelligence Analyst"
                        src={arcx}
                        alt="Foundation Level Threat Intelligence Analyst"/>

                        <MediaPlaceholder caption="(EC-Council) Certified Secure Computer User"
                        src={CSCU}
                        alt="(EC-Council) Certified Secure Computer User"/>

                        
                    </div>
                </section>

                
                
                {/* ================= GALLERY 

                <section className="pageSection">
                <h2>Competitions</h2>
                <hr />
                <br />

                <p>
                    Learning with a fun competition
                </p>


                    <div className="mediaGrid">

                        <MediaPlaceholder caption="Studying at Singapore Polytechnic" icon="🎓" />

                    </div>
                </section>
                ================= */}

            </div>

            <Footer />

        </div>
    );
}

export default Certifications;
