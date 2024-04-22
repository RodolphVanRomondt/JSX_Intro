const App = () => {
    return (
        <div>
            <Tweet username="dof" name="Rodolph" className="card" style="width: 18rem;"
                message="I'm learning Software Engineering at Springboard" date="04-21-2024" />
            <Tweet username="cotl" name="Colt"
                message="I'm a teacher at Springboard" date="04-22-2024" />
            <Tweet username="dave" name="David"
                message="I'm a mentor at Springboard" date="04-23-2024" />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));