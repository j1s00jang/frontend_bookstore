import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BookList from "./components/BookList.jsx";
import "./index.css";

function App() {
    return (
        <div>
            <Header />
            <main>
                <BookList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
