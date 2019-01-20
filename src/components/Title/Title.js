import React from "react";
import "./Title.css";

import {
    Button
} from 'reactstrap';




class Title extends React.Component {



    render(props) {
        return (

            <div className="title">
            <h1 className="letter">Box Office!</h1>
                <Button className="login"><i class="fas fa-user"></i></Button>
            </div>

        );
    }




};

export default Title;