import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CONTACT_LINKS = [
    {
        label: "Email",
        value: "gjr190905@gmail.com",
        href: "mailto:gjr190905@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/gan-jia-riang",
        href: "https://linkedin.com/in/gan-jia-riang",
    },
    {
        label: "GitHub",
        value: "github.com/your-username",
        href: "https://github.com/",
    },
    {
        label: "Location",
        value: "Singapore",
        href: undefined,
    },
];

function Contacts() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>CONTACT</h2>
                <hr />
                <br />

                <p>
                    Feel free to reach out — I'm always happy to talk about IT infrastructure,
                    cloud, cybersecurity, or upcoming internship opportunities.
                </p>

                <div className="contactPageGrid">
                    {CONTACT_LINKS.map((link) =>
                        link.href ? (
                            <a
                                className="contactPageCard"
                                href={link.href}
                                key={link.label}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                <span className="contactPageLabel">{link.label}</span>
                                <span className="contactPageValue">{link.value}</span>
                            </a>
                        ) : (
                            <div className="contactPageCard" key={link.label}>
                                <span className="contactPageLabel">{link.label}</span>
                                <span className="contactPageValue">{link.value}</span>
                            </div>
                        )
                    )}
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default Contacts;
