import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

import logo from "../assets/images/Logo.png";
import hamburger from "../assets/images/Hamburger_bar_closed.png";
import hamburgerOpen from "../assets/images/Hamburger_bar_open.png";
import hamburgerHover from "../assets/images/Hamburger_bar_hover.png";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "About Me", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Industrial Experience", to: "/industrial-experience" },
    { label: "Certifications & Achievements", to: "/certifications" },
    { label: "Education", to: "/education" },
    { label: "Contacts", to: "/contacts" },
    { label: "Hobby and Others", to: "/hobbies" },
];

function Header() {
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
        <>
            <header className="header">

                <div className="header-left">

                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="logo"
                        />
                    </Link>

                    <h1>
                        My Portfolio
                    </h1>

                </div>

                <button
                    className="hamburgerButton"
                    onClick={() => setMenuOpen(!menuOpen)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation menu"
                >

                    <img
                        src={hamburgerSrc}
                        alt="Menu"
                    />

                </button>

            </header>

            {/* ================= NAV OVERLAY ================= */}

            <div className={`navOverlay ${menuOpen ? "navOverlayOpen" : ""}`}>

                <nav className="navMenu">

                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="navLink"
                            style={{ transitionDelay: `${index * 45}ms` }}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="navLinkIndex">{String(index + 1).padStart(2, "0")}</span>
                            <span className="navLinkLabel">{link.label}</span>
                        </Link>
                    ))}

                </nav>

            </div>
        </>
    );
}

export default Header;
