function BookCard({ image, price, url }) {
    return (
        <div
            style={{
                border: "1px solid #000000",
                width: "170px",
                height: "270px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            {/* Book cover image */}
            <div
                style={{
                    height: "200px",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                }}
            >
                <img
                    src={image}
                    alt={price}
                    style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* price section */}
            <div
                style={{
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "1",
                    textAlign: "center",
                    padding: "10px",
                }}
            >
                <p
                    style={{
                        color: "black",
                        fontSize: "0.9rem",
                        margin: "0",
                        fontWeight: "bold",
                        lineHeight: "1.6",
                    }}
                >
                    {price}
                </p>
            </div>
            {/* Learn More button section */}
            <div
                style={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <a
                    href={url}
                    target="_blank"
                    style={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#3a4660",
                        textDecoration: "none",
                        color: "white",
                        fontSize: "1rem",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = "#3a4660";
                        e.target.style.backgroundColor = "#FFFFFF";
                        e.target.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = "#FFFFFF";
                        e.target.style.backgroundColor = "#3a4660";
                        e.target.style.textDecoration = "none";
                    }}
                >
                    Learn more
                </a>
            </div>
        </div>
    );
}

export default BookCard;
