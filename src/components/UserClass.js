import React from "react";
import axios from "axios";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo : null
        }

        // console.log(this.props.name, 'Child constructor');
    }

    async componentDidMount() {
        // console.log(this.props.name, "Child Component Did Mount");
        // API call

        const response = await axios.get("https://api.github.com/users/amanx14");
        const data = await response.data;

        console.log(data);

        this.setState({
            userInfo : data
        })
    }

    componentDidUpdate() {
        // console.log("Component Did Update"); 
    }

    componentWillUnmount() {
        clearInterval(this.x);
    }

    render() {
        // console.log(this.props.name, "Child Render");
        if(this.state.userInfo === null) {
            return <h1>Loading...</h1>
        }

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name - {name}</h2>
                <h2>Location - {location}</h2>
            </div>
        );
    }
}

export default UserClass;