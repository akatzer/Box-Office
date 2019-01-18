import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./moviecards.json";
import Search from "./components/searchBox/search";
import "./App.css";


class App extends Component {
    
    render() {
        return (
            <Wrapper>
                <Title>Box Office</Title>
        
            <MovieCard></MovieCard>
                    
            </Wrapper>
            
            
        );
    }
}

export default App;