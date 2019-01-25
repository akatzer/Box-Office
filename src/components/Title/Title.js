import React from "react";
import "./Title.css";

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,
} from 'reactstrap';




class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (

            <div className="title">
                <h1 className="letter">Box Office!</h1>

                <div>
                    <Button className="login" onClick={this.toggle}><i className="fas fa-user"></i>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Login/Sign Up</ModalHeader>
                        <ModalBody>
                        <Input id="searchInput" placeholder="Email" />
                        <Input id="searchInput" placeholder="Password" />
          </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Log In</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        );
    }




};

export default Title;