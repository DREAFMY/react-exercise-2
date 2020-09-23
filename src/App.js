import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './component/head';
import Content from './component/content';
import './App.scss';

class App extends Component {
  state = {
    count: 0,
  };

  cartAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <main className="app">
        <Head countValue={this.state.count} />
        <Content cartAdd={this.cartAdd} />
      </main>
    );
  }
}

export default App;
