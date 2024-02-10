import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        console.log(props);

        this.state = {
            count: 0,
            count2 : 5
        }
    }

    render() {
        const { name, location, contacts } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h2>Name - {name}</h2>
                <h3>Location - {location}</h3>
                <h3>Contacts - {contacts}</h3>
                <button>Count1 : {count}</button> <br />
                <button>Count2 : {count2}</button>
            </div>
        );
    }
}

export default UserClass;