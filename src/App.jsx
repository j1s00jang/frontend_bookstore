import Excerpt from "./Excerpt";

function App() {
    return (
        <div>
            <Excerpt
                title="React is awesome!😎"
                body="I enjoy developing with React."
            />
            <Excerpt
                title="HTML rocks!🪨"
                body="The real web is markup."
            />
            <Excerpt
                title="CSS rules them all.📏"
                body="It's all about how it looks!"
            />
        </div>
    );
}

export default App;
