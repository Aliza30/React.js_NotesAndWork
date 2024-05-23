import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Component Did Mount");
        const response = await fetch("https://api.github.com/users/Aliza30");
        const data = await response.json();

        this.setState({
            userInfo: {
                name: data.name || "N/A",
                location: data.location || "N/A",
                avatar_url: data.avatar_url,
                login: data.login
            },
        });

        // Uncomment the next line to see the fetched data in the console
        console.log(data)
    }
    componentDidUpdate() {
        console.log(`Component did Update`)
    }

    render() {
        //   console.log(this.props.name + "Child Render");

        const { name, location, avatar_url, login } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <img src={avatar_url} ></img>
                <h3>Location: {location}</h3>
                <h4>Contact: @{login}</h4>
            </div>
        );
    }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */