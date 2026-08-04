import "../styles/Layout.css";
import footerBanner from "../assets/images/banners/footer_banner.png";

function Footer() {
    return (
        <footer>

            <div className="blackbg">
                <div className="contact">

                    <h2>Building, supporting, and securing systems that matter</h2>

                </div>
            </div>

            <img
                src={footerBanner}
                alt="Footer Banner"
                className="footerBanner"
            />

        </footer>
    );
}

export default Footer;
