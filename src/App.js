import React, { Component } from "react";
import MovieCard from "./components/MovieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/searchBox/searchBox";
import "./App.css";


class App extends Component {
    
    render() {
        return (
            <Wrapper>
                <Title>Box Office</Title>
        
            <MovieCard></MovieCard>

               <Search></Search>

            </Wrapper>
            
            
            
        );
    }
}

export default App;