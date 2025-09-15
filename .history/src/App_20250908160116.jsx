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

function Excerpt(props) {
    return (
        <div class="excerpt">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>Click me!</button>
        </div>
    );
}
export default App;
