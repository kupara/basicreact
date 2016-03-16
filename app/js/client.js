import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.js';
import Header from './components/Header.js';
import Card from './components/Card.js';

class Home extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		title: 'React'
  	};
  }

  changeTitle(title) {
  	this.setState({title});
  }

  render() {
    return (
      <div>
    	 <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
       <Layout title={this.state.title} />
       <Card/>
       <Card/>
       <Card/>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Home />, app);
