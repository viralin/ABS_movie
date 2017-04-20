import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import WeatherValuesComponent from './WeatherValuesComponent.js';


class App extends Component 
{
  constructor()
  {
    super();
    this.state={"name":"","weather":[],"tb":false};
    this.handleChange=this.handleChange.bind(this);
    this.fetchWeatherValue=this.fetchWeatherValue.bind(this);
  }

  handleChange(e)
  {
    this.setState({name: e.target.value});
  }
  fetchWeatherValue(cityname) 
  {
    console.log(cityname);
    this.setState({tb: true});
    $.ajax({
    
    url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&appid=e3ecc901824c48cabe7f3a3a01e6defb",
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(msg){
    console.log(msg.list);
    this.setState({weather:msg.list});
    }.bind(this),
    error: function(err){
    console.log("Main-Error Fetching ");
    }
    });
  }
  render() {
    return (
      <div className="App">
      <h1>Weather Forecast</h1>
        <input type="text" value={this.state.name} onChange={this.handleChange}/>
        
        <button type="submit" onClick={() => {this.fetchWeatherValue(this.state.name)}}>Search</button>
        <WeatherValuesComponent weather={this.state.weather} tb={this.state.tb}/>
      </div>
    );
  }
}

export default App;
