import React from "react";
import "./searchBox.css";

import {
  Input,
  Card, CardBody,
  CardTitle,
  Button
 } from 'reactstrap';

class searchBox extends React.Component {
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

<Card id="search" >
       
        <CardBody >
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
};

export default searchBox;