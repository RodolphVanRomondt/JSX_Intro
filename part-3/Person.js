const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            <p>Learn some information about {name.length > 8 ? name.slice(0,6): name}</p>
            <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            {hobbies ?
                <div>
                    <h3>Hobbies</h3>
                    <ul> {hobbies.map(e => <li>{e}</li>)}</ul>
                </div> :
                <h3>No Hobby</h3>}
            <hr></hr>
        </div>
    );
}