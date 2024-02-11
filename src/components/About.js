import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

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
                <h2>This is about class component</h2> <br />
                <UserClass name="First" location="Dhanbad" contacts="LinkedIn" />
                {/* <User name="Sec" location="Delhi" contacts="Twitter" /> */}
            </div>
        );
    }
}

export default About;