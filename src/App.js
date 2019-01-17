import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./moviecards.json";
import Search from "./components/searchBox/search";
import "./App.css";



class App extends Component {
    
    // Setting this.state.matches to the movies json array
    state = {
        matches,

    };



        // Otherwise, if clicked = false, and the user hasn't finished

    render() {
        return (
            <Wrapper>
                
                <Title> Blockbuster your new favorite site </Title>
        

                
                <div className="container">
                <div className="row">
                
                
                {this.state.matches.map(match => (
                    <MovieCard
                        setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
                
                </div>
                </div>
                <Search> Search a movie here</Search>
            </Wrapper>
            
            
        );
    }
}

export default App;