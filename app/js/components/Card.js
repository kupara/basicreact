import React from 'react';
require('../../styles/styles.css');

export default class Layout extends React.Component {
  render() {
  	return (
		 	<div className="row">
	      <div className="col s12 cards-container">
	        <div className="card transparent lighten-2">
	          <div className="center blue-text darken-4 card-action">
	          	<span className="card-title">Andela Kenya</span>
	          </div>
	          <div className="row card-action">
		          <div className="col s6 margin-top right-border">
		          		<img src="../../images/andelogo.png"/>
		          </div>
		          <div className="card-content teal-text darken-1 col s6">
			          <div>
			            <p>I am a very simple card. I am good at containing small bits of information.
			            I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information.
			            I am convenient</p>
			          </div>
			          <div className="red-text">
			          	<p>Owner:</p>
			          	<p>Admin:</p>
			          </div>
		          </div>
	          </div>
	          <div className="card-action">
	          	<ul>
		            <li><a href="#" className="blue-text">More Projects</a></li>
		            <li><a href="#" className="blue-text">Manage Users</a></li>
		            <li><a href="#" className="blue-text">More Projects</a></li>
		            <li><a href="#" className="blue-text">Manage Users</a></li>
		          </ul>
	          </div>
	          <div className="card-action">
	            <a href="#" className="blue-text">More Projects</a>
	            <a href="#" className="blue-text">Manage Users</a>
	            <a href="#" className="blue-text">Add Project</a>
	          </div>
	        </div>
	      </div>
    	</div>
    );
  }
}