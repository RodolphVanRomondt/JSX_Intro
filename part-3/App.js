const App = () => {
    return (
        <div>
            <Person name="Rodolph" age={39} hobbies={["Learn", "Basketball", "Movies"]} />
            <Person name="Schwarzenegger" age={76} hobbies={["Acting", "Bodybuilding", "Politics"]} />
            <Person name="David" age={0} hobbies={["Mentoring"]} />
            <Person name="Colt" age={0} />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));