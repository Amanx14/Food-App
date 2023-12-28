import { useRouteError } from "react-router-dom";
import { CAT_ERROR } from "../utils/constants";

const Error = ()=> {
    const err = useRouteError();
    console.log(err);
    
    const styleCat = {
        height : "500px",
        width : "500px"
    }
    return (
        <div>
            <h1>OOOOPPPSSS! You've got an error, Buzzzz???</h1>
            <img src={CAT_ERROR} style={styleCat} alt="Meww"/>
        </div>
    );
}

export default Error;