const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Rodolph"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));