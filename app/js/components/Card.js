import React from 'react';

export default class Layout extends React.Component {
  render() {
  	return (
		 	<div className="no-margin row">
        <div className="col s4 m4">
          <div className="card teal darken-1">
          	<div className="row">
          		<div className="logo col s2">
          			<img src="../../images/andelogo.png" className="avatar circle responsive-img"/>
          		</div>
	          	<div className="col s10 card-content white-text">
	              <span className="card-title"><h5>Andela</h5></span>
	              <p>Talent Accelerator Company</p>
	            </div>
		         </div>
          	<div className="row">
	            <div className="col s6 card-content white-text">
	              <span className="card-title">Projects</span>
							  <ul>
						      <li>Trime Project Track</li>
						      <li>Troupon</li>
						      <li>Suya Bay</li>
						      <li>VVida Video Sharing</li>
						    </ul>
	              <div> 
		              <a href="#">Add New Project</a>
		            </div>
	            </div>
	            <div className="col s6 card-content white-text">
	              <span className="card-title">Users</span>
	              <ul>
						      <li>Godson Ukpere</li>
						      <li>Edwin Kupara</li>
						      <li>Koech Brian</li>
						      <li>Kithome Jeremy</li>
						    </ul>
	              <div>
		              <a href="#">Manage Users</a>
		            </div>
	            </div>
	         </div>
          </div>
        </div>
      </div>
    );
  }
}