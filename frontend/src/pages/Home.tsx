import { useState } from "react";
import "../styles/Home.css";

import logo from "../assets/images/Logo.png";

import hamburger from "../assets/images/Hamburger_bar_closed.png";
import hamburgerOpen from "../assets/images/Hamburger_bar_open.png";
import hamburgerHover from "../assets/images/Hamburger_bar_hover.png";

import banner from "../assets/images/banners/home_banner.png";
import footerBanner from "../assets/images/banners/footer_banner.png";

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Closed + hovered -> hover art. Open takes priority since it reflects
    // the button's actual state once clicked. Falls back to the closed icon.
    const hamburgerSrc = menuOpen
        ? hamburgerOpen
        : isHovering
            ? hamburgerHover
            : hamburger;

    return (
        <div className="home">

            {/* ================= HEADER ================= */}

            <header className="header">

                <div className="header-left">

                    <img
                        src={logo}
                        alt="Logo"
                        className="logo"
                    />

                    <h1>
                        My Portfolio
                    </h1>

                </div>

                <button
                    className="hamburgerButton"
                    onClick={() => setMenuOpen(!menuOpen)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >

                    <img
                        src={hamburgerSrc}
                        alt="Menu"
                    />

                </button>

            </header>

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

                    <p>
                    IT Project Engineer | Cloud | Defensive Cybersecurity | Networks
                    </p>

                </div>

            </section>

            {/* ================= CONTENT ================= */}

            <main className="content">

                <section className="card">

                    <h2 className="h2small">ABOUT</h2>

                    <p>
                        Welcome to my portfolio.
                        This website showcases my journey in Cyber Security,
                        Network Engineering, Cloud Computing and Infrastructure.
                        Inspired by Arasaka Corporation from Cyberpunk 2077,
                        this interface blends futuristic aesthetics with clean
                        engineering principles.
                    </p>

                </section>

                <section className="card">

                    <h2>CURRENT STATUS</h2>

                    <ul>

                        <li>Diploma in Information Technology</li>

                        <li>Cyber Security Enthusiast</li>

                        <li>Project Engineer</li>

                        <li>Cloud & Infrastructure Learner</li>

                    </ul>

                </section>

            </main>

            {/* ================= FOOTER ================= */}
            <footer>

            <div className="blackbg">
                <div className="contact">

                    <h2>CONTACT</h2>

                    <p>Email:</p>

                    <p>LinkedIn:</p>

                    <p>GitHub:</p>

                </div>
            </div>

                <img
                    src={footerBanner}
                    alt="Footer Banner"
                    className="footerBanner"
                />

            </footer>

        </div>
    );
}

export default Home;