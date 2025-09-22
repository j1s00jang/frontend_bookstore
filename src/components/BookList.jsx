import BookCard from "./BookCard";
import books from "../data/books.json";

function BookList() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 170px)",
                gap: "20px",
                padding: "20px 0",
                alignItems: "start",
                justifyContent: "center",
                maxWidth: "1200px",
                margin: "0 auto",
                width: "100%",
            }}
        >
            {/* New Book Button - First row, first column only */}
            <div
                style={{
                    width: "170px",
                    height: "270px",
                    border: "5px solid #d3d3d3",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    gridColumn: "1",
                    gridRow: "1",
                }}
                onMouseEnter={(e) => {
                    e.target.style.borderColor = "#a0a0a0";
                    e.target.style.backgroundColor = "#f8f8f8";
                }}
                onMouseLeave={(e) => {
                    e.target.style.borderColor = "#d3d3d3";
                    e.target.style.backgroundColor = "white";
                }}
            >
                <span
                    style={{
                        color: "#a0a0a0",
                        fontSize: "24px",
                        fontWeight: "bold",
                        fontFamily: "serif",
                    }}
                >
                    New
                </span>
            </div>

            {/* First row books (columns 2-6) */}
            {books.slice(0, 5).map((book, index) => (
                <div
                    key={index}
                    style={{
                        gridColumn: `${index + 2}`,
                        gridRow: "1",
                    }}
                >
                    <BookCard {...book} />
                </div>
            ))}

            {/* Second row and beyond books (columns 2-6 only) */}
            {books.slice(5).map((book, index) => (
                <div
                    key={index + 5}
                    style={{
                        gridColumn: `${(index % 5) + 2}`,
                        gridRow: `${Math.floor(index / 5) + 2}`,
                    }}
                >
                    <BookCard {...book} />
                </div>
            ))}
        </div>
    );
}

export default BookList;
