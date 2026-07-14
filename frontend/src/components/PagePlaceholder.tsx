import Header from "./Header";
import "../styles/Page.css";

interface PagePlaceholderProps {
    title: string;
    description: string;
}

function PagePlaceholder({ title, description }: PagePlaceholderProps) {
    return (
        <div className="page">

            <Header />

            <div className="pageBody">

                <h2>{title}</h2>

                <p>{description}</p>

                <span className="pageBadge">Content coming soon</span>

            </div>

        </div>
    );
}

export default PagePlaceholder;
