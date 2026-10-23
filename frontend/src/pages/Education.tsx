import "../styles/Page.css";
import "../styles/Home.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import DocumentLink from "../components/DocumentLink";
import banner from "../assets/images/banners/education_banner.png"
import star from "../assets/documents/21stCenturyStar.pdf"
import COM from "../assets/documents/COM_ITE.pdf"
import dL2022 from "../assets/documents/dL2022.pdf"
import gradITE from "../assets/images/education/1392.jpg"
import spCares2025 from "../assets/images/education/SPcares.jpeg"
import spClass from "../assets/images/education/SPsem1class.jpeg"
import iteClass from "../assets/images/education/ITEClass.png"
import splib from "../assets/images/education/SPlibrary.jpeg"
import returnToPS from "../assets/images/education/returnToPS.jpg"

const EDUCATION = [
    {
        school: "Singapore Polytechnic",
        program: "Diploma in Information Technology",
        date: "Apr 2025 – Apr 2028",
        current: true,
        bullets: [
            "Majoring in Cloud Computing & Cybersecurity",
            "renamed Diploma in Computer Science",
            "Cumulative GPA: 3.47",
        ],
        cca: [
            "Gold with honors Co-curricular activities (CCA) award",
            "SP Gryphons (Cybersecurity)",
            "SP SEED (IT & Computer Science)",
            "ECG Ambassadors",
        ],
    },
    {
        school: "Institute of Technical Education (ITE)",
        program: "Higher NITEC in Cyber & Network Security",
        date: "Jan 2022 – Dec 2024",
        current: false,
        bullets: [
            "Certificate of Merit — top 5% of the graduating cohort",
            "Cumulative GPA: 3.69",
        ],
        cca: [
            "Silver Co-curricular activities (CCA) award",
            "ACE Club",
            "Green Ambassador Club",
            "J-Culture Club"
        ],
    },
];

function Education() {
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
                        Education
                    </h2>
                    <hr/>

                    <p>
                    My academic journey
                    </p>

                </div>

            </section>

            <div className="pageBody">

            <section>
                <h2>The summary of my academic journey</h2>
                <hr />
                <br />

                <p>
                    I realised and gained my passion in the Infromation Technology sector during my time in ITE 
                    (Institute of Technical Education) taking on the Higher NITEC in Cyber & Network Security.
                </p>

                <br/>

                <p>
                    My academic path began from ITE to Singapore Polytechnic, building a foundation
                    in network security before specializing further into cloud and cybersecurity.
                </p>
                </section>
            
                

                <section className="pageSection">

                    <div className="timeline">
                        {EDUCATION.map((edu) => (
                            <div className={`timelineItem${edu.current ? " current" : ""}`} key={edu.school}>
                                <span className="timelineDot" />
                                <div className="timelineMeta">
                                    <span className="timelineRole">{edu.school}</span>
                                    <span className="timelineDate">{edu.date}</span>
                                </div>
                                <p style={{ color: "var(--red)", marginTop: 0, marginBottom: 10 }}>
                                    {edu.program}
                                </p>
                                <ul>
                                    {edu.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>

                                <br/>
                                
                                <p style={{ color: "var(--yellow)", marginTop: 0, marginBottom: 10 }}>
                                    Co-Curricular Activities</p>
                                <ul>
                                    {edu.cca.map((cca) => (
                                        <li key={cca}>{cca}</li>
                                    ))}
                                </ul>
                            </div>
                            
                        ))}

                    </div>

                </section>

            {/* ================= GALLERY ================= */}

            <section className="pageSection">
                <h2>Academic Achievements</h2>
                <p className="pageSectionSub">My proudest achievements in my academic journey</p>

                <div className="mediaGrid">

                    <div>
                    <DocumentLink label="ITE Higher NITEC Certificate of Merit"
                    href={COM} />
                    <p>[-Click to view-]</p>
                    </div>
                    
                    <div>
                    <DocumentLink label="ITE College West SEIT 21st Century Star Award"
                    href={star}/>
                    <p>[-Click to view-]</p>
                    </div>
                    
                    <div>
                    <DocumentLink label="ITE College West SEIT Director's List 2022" 
                    href={dL2022}/>
                    <p>[-Click to view-]</p>
                    </div>
                </div>
            </section>


            {/* ================= GALLERY2 ================= */}

            <section className="pageSection">
                <h2>My Academia Life</h2>
                    <p className="pageSectionSub">Snapshots from ITE and Singapore Polytechnic</p>

                <div className="mediaGrid">
                    <MediaPlaceholder caption="Singapore Polytechnic (SP cares), a community service with the
                    freshmen. - 2026" 
                    src={spCares2025}
                    alt="SP Cares"/>
                    
                    <MediaPlaceholder caption="Singapore Polytechnic, a class photo. - 2026" 
                    src={spClass}
                    alt="Class photo"/>

                    <MediaPlaceholder caption="Singapore Polytechnic, drawing in the library. - 2025" 
                    src={splib}
                    alt="library"/>

                    <MediaPlaceholder caption="ITE graduation, one of the best moments in my life. - 2024" 
                    src={gradITE}
                    alt="ITE graduation"/>

                    <MediaPlaceholder caption="ITE, visting my primary school as an alumni. - 2023" 
                    src={returnToPS}
                    alt="A visit to my primary school"/>

                    <MediaPlaceholder caption="ITE, a class photo during a school outing. - 2022" 
                    src={iteClass}
                    alt="ITE graduation"/>
                </div>
            </section>
            </div>

            <Footer />

        </div>
    );
}

export default Education;