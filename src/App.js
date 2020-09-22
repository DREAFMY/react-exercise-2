import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './component/head';
import Content from './component/content';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Head />
        <Content />
      </main>
    );
  }
}

export default App;
