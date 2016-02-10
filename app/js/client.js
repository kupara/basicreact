import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header.jsx';

class Layout extends React.Component {
  render() {
    return (
    	<div>
        <Header />
        <h1>This is my very first React Application!</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDom.render(<Layout />, app);
