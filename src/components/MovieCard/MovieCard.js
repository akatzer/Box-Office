import "./MovieCard.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText, Form } from 'reactstrap';
import React, { Component } from 'react';
<<<<<<< HEAD

// const MovieCard = props => (

// 	<div onClick={() => props.setClicked(props.id)} className="card col-md-3">
// 		<div className="img-container">
// 			<img alt={props.name} src={props.image} />
// 		</div>
// 	</div>
// );

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      modal: false,
    }
    // this.toggle = this.toggle.bind(this)
  };

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   })
  // }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=51743cb9828947ec2fa3ed3b2232d6d7&language=en-US&page=1&USA")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          movies: json,
        })
        console.log(json);
      });
  }
  render() {

    var { isLoaded, movies } = this.state


    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (
        <div>

          {movies.results.map(mov => (

            <div class='movies col-md-2' key={mov.id}>
              {/* {mov.title} */}

              <div className='image-container'>
                <img id='poster' alt={mov.title} value={mov.title} src={"http://image.tmdb.org/t/p/w185/" + mov.poster_path} onClick={() => this.openModal(mov.id)} />
              </div>

              {/* Rating: {mov.vote_average} */}

              <Modal isOpen={this.state.opened === mov.id} className={this.key}>
                <ModalHeader>{mov.title}</ModalHeader>
                <ModalHeader>{mov.release_date}</ModalHeader>
                <ModalHeader>{mov.overview}</ModalHeader>
                <ModalHeader>{mov.popularity}</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input type="name" name="name" id="name" placeholder="Enter Name Here" />
                      <FormGroup>
                        <Label for="review">Review</Label>
                        <Input type="textarea" name="review" id="review" />
                        <FormGroup>
                          <Label for="score">Score (out of 5)</Label>
                          <Input type="select" name="score" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </FormGroup>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.closeModal}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>



          ))}


        </div>
      )
    }

  }

  openModal = (id) => {
    console.log(id);
    this.setState({
      opened: id
    });    
  }


  closeModal = () => {
    this.setState({
      opened: null
    });    
  }  
}


=======

// const MovieCard = props => (

// 	<div onClick={() => props.setClicked(props.id)} className="card col-md-3">
// 		<div className="img-container">
// 			<img alt={props.name} src={props.image} />
// 		</div>
// 	</div>
// );

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      modal: false,
    }
    // this.toggle = this.toggle.bind(this)
  };

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   })
  // }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=51743cb9828947ec2fa3ed3b2232d6d7&language=en-US&page=1&USA")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          movies: json,
        })
        console.log(json);
      });
  }
  render() {

    var { isLoaded, movies } = this.state


    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (
        <div>

          {movies.results.map(mov => (

            <div class='movies col-md-2' key={mov.id}>
              {/* {mov.title} */}

              <div className='image-container'>
                <img id='poster' alt={mov.title} value={mov.title} src={"http://image.tmdb.org/t/p/w185/" + mov.poster_path} onClick={() => this.openModal(mov.id)} />
              </div>

              {/* Rating: {mov.vote_average} */}

              <Modal isOpen={this.state.opened === mov.id} className={this.key}>
                <ModalHeader>{mov.title}</ModalHeader>
                <ModalHeader>{mov.release_date}</ModalHeader>
                <ModalHeader>{mov.overview}</ModalHeader>
                <ModalHeader>{mov.popularity}</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input type="name" name="name" id="name" placeholder="Enter Name Here" />
                      <FormGroup>
                        <Label for="review">Review</Label>
                        <Input type="textarea" name="review" id="review" />
                        <FormGroup>
                          <Label for="score">Score (out of 5)</Label>
                          <Input type="select" name="score" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </FormGroup>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.closeModal}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>



          ))}


        </div>
      )
    }

  }

  openModal = (id) => {
    console.log(id);
    this.setState({
      opened: id
    });    
  }


  closeModal = () => {
    this.setState({
      opened: null
    });    
  }  
}
>>>>>>> 2b921be6a2621184484976047d2ce17143d4561b

export default MovieCard;