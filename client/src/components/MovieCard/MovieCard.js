import "./MovieCard.css";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Form } from 'reactstrap';
import React, { Component } from 'react';
import API from "../../utils/API"

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      modal: false,
    }
  };

  handleClickUp = (e) => {
    let title = e.target.value;
    API.saveReview({
      title: title,
      review: true
    })
  }

  handleClickDown = (e) => {
    let title = e.target.value;
    API.saveReview({
      title: title,
      review: false
    })
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=51743cb9828947ec2fa3ed3b2232d6d7&language=en-US&page=1&USA")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          movies: json,
        })
      });
  }
  render() {

    var { isLoaded, movies } = this.state

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {

      return (
        <div id="modalBody">

          {movies.results.map(mov => (

            <div className='movies col-md-0' key={mov.id}>

              <div className='image-container'>
                <figure>

                    <img id='poster' alt={mov.title} value={mov.title} src={"http://image.tmdb.org/t/p/w185/" + mov.poster_path} onClick={() => this.openModal(mov.id)} />

                      <figcaption>
                        <h2 className="FigTitle" >{mov.title}</h2>
                      </figcaption>

                </figure>

              </div>

              {/* Rating: {mov.vote_average} */}

              <Modal isOpen={this.state.opened === mov.id} className={this.key} toggle={this.toggle}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
              
                <ModalHeader id="title">{mov.title} </ModalHeader>
                <ModalHeader>Release Date: {mov.release_date}</ModalHeader>
                <ModalHeader>Overview: {mov.overview}</ModalHeader>

                {/* <ModalHeader>{mov.popularity}</ModalHeader> */}
                <ModalBody>

                  <Form>
                    <FormGroup>
                      <FormGroup>
                        <FormGroup>Have you seen this already? Tell us what you thought!</FormGroup>
                      </FormGroup>
                    </FormGroup>
                  </Form>
                </ModalBody>

                <div id="modalButtons">
                  <Button className="modalButtonUp" value={mov.title} onClick={(e) => this.handleClickUp(e)}><i className="fas fa-thumbs-up"></i></Button>
                  <Button className="modalButtonDown" value={mov.title} onClick={(e) => this.handleClickDown(e)}><i className="fas fa-thumbs-down"></i></Button>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      )
    }

  }

  openModal = (id) => {
    this.setState({
      opened: id
    });
  }

  closeModal = () => {
    this.setState({
      opened: null
    });
  }

  test2 = () => {
    console.log("test");
  }
}

export const test = () => {
  this.test2();
}
export default MovieCard;