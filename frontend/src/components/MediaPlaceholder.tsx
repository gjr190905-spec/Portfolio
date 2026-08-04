interface MediaPlaceholderProps {
    /** Caption shown below the frame, e.g. "On-site at a government infrastructure project" */
    caption?: string;
    /** Controls the frame's aspect ratio */
    aspect?: "wide" | "square" | "tall";
    /** Emoji/icon shown while no real image is set */
    icon?: string;
    /** Once you have a real image, import it and pass it here — the placeholder disappears automatically */
    src?: string;
    alt?: string;
}

function MediaPlaceholder({ caption, aspect = "wide", icon = "🖼️", src, alt }: MediaPlaceholderProps) {
    const aspectClass =
        aspect === "square" ? "mediaSquare" : aspect === "tall" ? "mediaTall" : "mediaWide";

    return (
        <figure className="mediaFigure">

            <div className={`mediaPlaceholder ${aspectClass}`}>
                {src ? (
                    <img src={src} alt={alt ?? caption ?? "Image"} />
                ) : (
                    <>
                        <span className="mediaIcon">{icon}</span>
                        <span className="mediaPlaceholderText">Image coming soon</span>
                    </>
                )}
            </div>

            {caption && <figcaption className="mediaCaption">{caption}</figcaption>}

        </figure>
    );
}

export default MediaPlaceholder;
