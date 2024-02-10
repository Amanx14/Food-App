import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is about class component</h2> <br />
                <UserClass name="First" location="Dhanbad" contacts="LinkedIn" />
                <UserClass name="Second" location="Jharia" contacts="Twitter" />
            </div>
        );
    }
}

export default About;