interface DocumentLinkProps {
    label: string;
    href?: string;
}

function DocumentLink({ label, href }: DocumentLinkProps) {
    const isAvailable = Boolean(href);

    const inner = (
        <>
            <span className="documentLabel">{label}</span>
        </>
    );

    if (isAvailable) {
        return (
            <a className="documentItem isAvailable" href={href} target="_blank" rel="noreferrer">
                {inner}
            </a>
        );
    }

    return <div className="documentItem">{inner}</div>;
}

export default DocumentLink;
