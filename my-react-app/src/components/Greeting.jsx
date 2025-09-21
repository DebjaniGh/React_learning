const Greeting = ({name, age, location}) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Your age is {age}.</p>
            <p>You stay at {location}.</p>
        </div>
    )
}

export default Greeting;