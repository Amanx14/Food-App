import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2 : 5
        }

        console.log(this.props.name, 'Child constructor');
    }

    componentDidMount() {
        console.log(this.props.name, "Child Component Did Mount");

        // API call
    }

    render() {
        console.log(this.props.name, "Child Render");
        const { name, location, contacts } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Name - {name}</h2>
                <h3>Location - {location}</h3>
                <h3>Contacts - {contacts}</h3>

                <h2>Count 1 : {count}</h2>
                <h2>Count 2 : {count2}</h2>

                <button onClick={()=> {
                    this.setState({
                        count : this.state.count + 1,
                        count2 : this.state.count2 + 2,
                    })
                }}>Increase Count</button> <br />
            </div>
        );
    }
}

export default UserClass;