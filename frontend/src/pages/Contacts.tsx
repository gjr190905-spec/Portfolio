import "../styles/Page.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import profilePicture from "../assets/images/profile/Pic.png";
import DocumentLink from "../components/DocumentLink";
import resumePDF from "../assets/documents/Gan Jia Riang Resume.pdf";

const CONTACT_LINKS = [
    {
        label: "Email",
        value: "ganjiariang.matthew@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "www.linkedin.com/in/gan-jia-riang-matthew",
        href: "https://www.linkedin.com/in/gan-jia-riang-matthew",
    },
    {
        label: "Location",
        value: "Singapore",
        href: undefined,
    },
    {
        label: "Number",
        value: "+65 8618 4860",
        href: undefined,
    }
];

function Contacts() {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>CONTACT</h2>
                <hr />
                <br />

                <div className="avatar">
                    <img
                    src={profilePicture}
                    alt="profile picture"
                />
                </div>
                <br/>
                <div className="ctaButtons">
                        <DocumentLink
                            label="View My Resume"
                            href={resumePDF}
                        />
                </div>

                <br/>
                <hr/>

                <p>
                    Feel free to reach out. I'm always happy to talk about IT infrastructure,
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
