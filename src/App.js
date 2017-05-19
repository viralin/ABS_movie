import React, { Component } from 'react';
import './App.css';
import './index.css';
import $ from 'jquery';
import MovieDisplay from './MovieDisplay.js';



class App extends Component 
{
  constructor()
  {
    super();
    this.state={"name":"","movie":[],"tb":false};
    this.handleChange=this.handleChange.bind(this);
    this.getmovieValue=this.getmovieValue.bind(this);
  }

  handleChange(e)
  {
    this.setState({name: e.target.value});
  }
  getmovieValue(moviename) 
  {

  var Input = moviename;
        var pathapi = 'http://www.omdbapi.com/?s='+ Input;
    this.setState({tb: true});
    $.ajax({
    
    url: pathapi,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(msg){
    console.log(msg.Search);
    this.setState({movie:msg.Search});
  
    }.bind(this),
    error: function(err){
    console.log("Main-Error Fetching ");
    }
    });
  }
  



  render() {
    return (
      <div className="App">
            <input id="search" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Search Your movie"/>
            <button type="submit"  id="btn" onClick={() => {this.getmovieValue(this.state.name)}}>Search</button>
            <MovieDisplay movie={this.state.movie} tb={this.state.tb} />

        </div>
    );
  }
}

export default App;
 