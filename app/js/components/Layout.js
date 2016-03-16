import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
    	<div>
        <h2> This is a {this.props.title} Application!</h2>
      </div>
    );
  }
}
