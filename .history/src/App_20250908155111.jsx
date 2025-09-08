function App() {
    return (
        <div>
            <Excerpt
                title="React is awesome!"
                body="I enjoy developing with React."
            />
            <Excerpt
                title="HTML rocks!"
                body="The real web is markup."
            />
            <Excerpt
                title="CSS rules them all."
                body="It's all about how it looks!"
            />
        </div>
    );
}

function Excerpt() {
    return (
        <div>
            <h1></h1>
            <p></p>
            <button>Click me!</button>
        </div>
    );
}
export default App;
