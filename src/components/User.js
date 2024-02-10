import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    const { name, location, contacts } = props;
    console.log(props);

    useEffect(() => {
        // API call
    }, []);

    return (
        <div className="user-card">
            <h2>Name - {name}</h2>
            <h3>Location -{location}</h3>
            <h3>Contacts -{contacts}</h3>
            <button onClick={() => {
                setCount(count + 1);
            }}>Clicked : {count}</button>
        </div>
    );
}

export default User;