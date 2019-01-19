import React from "react";
import "./Title.css";

import {
    Button,
    Jumbotron
} from 'reactstrap';



class Title extends React.Component {



    render(props) {
        return (

            <div className="title">
                <Jumbotron className="title">
                    <h1 className="display-3">Box Office!</h1>
                    <p className="lead">
                        <Button className="login">Login</Button>
                        <Button className="login" >Sign Up</Button>
                    </p>
                </Jumbotron>
            </div>

        );
    }




};

export default Title;