import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log('Parent Constructor');
    }

    componentDidMount() { 
        // console.log("Parent Component Did Mount");
    }

    componentWillUnmount() {
        // console.log("Parent Component Did unmount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {
                            ({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1> 
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is about class component</h2> <br />
                <UserClass name="First" location="Dhanbad" contacts="LinkedIn" />

            </div>
        );
    }
}

export default About;