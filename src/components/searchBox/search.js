import React from "react";
import "./search.css";

import {
  Input,
  Card, CardBody,
  CardTitle,
  Button
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


  render() {
    return (
      <div>

<Card>
       
        <CardBody id="search">
          <CardTitle>Search</CardTitle>
 

          <Input id="searchInput" />

          <Input id="searchDrop" type="select">
          <option>Genre</option>
          <option>Audience Score</option>
          <option>Title</option>
        </Input>

        <Button id="searchButton" color="secondary" size="sm">Small Button</Button>

                 
        </CardBody>
      </Card>
      </div>
    );
  }
}