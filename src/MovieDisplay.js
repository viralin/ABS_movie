import React, { Component } from 'react';




class MovieDisplay extends Component 
{
  render() 
  {
  	var mapping = this.props.movie.map(function(data) {

				

			return(

				<ol key={data.imdbID} className="item">
				{/*Displaying the movie content in a jumbotron class*/}
				 <section className="container" id="container">{/*section container starts here*/}
								               <section className="jumbotron" style={{"margin-top": "10%"}}>{/*jumbotron starts here*/}
								                   
								                   <img src={data.Poster} alt="" style={{"width": "350px", "height":"200","float":"left"}}/>
								                   <h4><b><i>Title:-</i></b>{data.Title}</h4>
								                   <h4><b><i>Year:-</i></b>{data.Year}</h4>
								                   
								                  
								               </section>{/*jumbotron ends here*/}


								</section> {/*section container ends here*/}

                   

					

				</ol>
					
				);
		}.bind(this));

    return (
   
      
      <div>
      { //Check if message failed
        (this.props.tb == true)
          ? <div>  
           {mapping}
		     </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}


export default MovieDisplay;
