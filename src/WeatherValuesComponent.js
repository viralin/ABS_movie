import React, { Component } from 'react';




class WeatherValuesComponent extends Component 
{
  render() 
  {
  	var mapping = this.props.weather.map(function(data) {
			return(
					<tr><td>{data.dt_txt}</td><td>{data.main.temp}</td><td>{data.main.pressure}</td><td>{data.main.humidity}</td><td>{data.main.temp_min}</td><td>{data.main.temp_max}</td></tr>
					
				);
		}.bind(this));

    return (
   
      <div>
      { //Check if message failed
        (this.props.tb == true)
          ? <div>  
          	<style>{"table,th,td{border:1px solid black;"}</style>
		      <table >
		      <tr>
		      <td>Date</td>
		      <td>Temperature</td>
		      <td>Pressure</td>
		      <td>Humidity</td>
		      <td>Minimum Temperature</td>
		      <td>Maximum Temperature</td>
		      </tr>
		      <tbody>
		      {mapping}
		      </tbody>
		      </table>

		    </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}

export default WeatherValuesComponent;
