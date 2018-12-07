import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import SimpleHeader from './components/SimpleHeader';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <SimpleHeader/>
            <List/>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
