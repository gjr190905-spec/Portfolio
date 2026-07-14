import "../styles/Layout.css";
import footerBanner from "../assets/images/banners/footer_banner.png";

function Footer() {
    return (
        <footer>

            <div className="blackbg">
                <div className="contact">

                    <h2>CONTACT</h2>

                    <div className="contactLinks">

                        <p><b>Email:</b> <a href="mailto:gjr190905@gmail.com">gjr190905@gmail.com</a></p>

                        <p><b>LinkedIn:</b> <a href="https://linkedin.com/in/gan-jia-riang" target="_blank" rel="noreferrer">linkedin.com/in/gan-jia-riang</a></p>

                        <p><b>GitHub:</b> <a href="https://github.com/" target="_blank" rel="noreferrer">github.com/your-username</a></p>

                        <p><b>Location:</b> Singapore</p>

                    </div>

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
