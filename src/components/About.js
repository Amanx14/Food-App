import User from "./User";
import UserClass from "./UserClass";

const About = () =>  {
    return (
        <div>
            <h1>About</h1>
            <h2>This is My Food App</h2> <br />
            <User name="Aman" location="Delhi" contacts="Amanx14"/>
            <UserClass name="Aman (Class based)" location="Dhanbad" contacts="LinkedIn"/>
        </div>
    );
}

export default About;