import "./MovieCard.css";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Form } from 'reactstrap';
import React, { Component } from 'react';
require("dotenv").config();
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
    fetch(process.env.movieDb_key)
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
        <div id="modalBody">

          {movies.results.map(mov => (

            <div class='movies col-md-2' key={mov.id}>
              {/* {mov.title} */}

              <div className='image-container'>
                <img id='poster' alt={mov.title} value={mov.title} src={"http://image.tmdb.org/t/p/w185/" + mov.poster_path} onClick={() => this.openModal(mov.id)} />
              </div>



              {/* Rating: {mov.vote_average} */}

              <Modal isOpen={this.state.opened === mov.id} className={this.key} toggle={this.toggle}>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
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
                  <Button className="modalButtonUp" onClick={this.closeModal}><i class="fas fa-thumbs-up"></i></Button>
                  <Button className="modalButtonDown" onClick={this.closeModal}><i class="fas fa-thumbs-down"></i></Button>
                </div>




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

export default MovieCard;