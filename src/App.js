import React from 'react';
import './assets/scss/app.scss';
import Header from './components/main/header';
import AppDemo from './components/appDemo/appDemo';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AppDemo></AppDemo>
      </div>
    );
  }
}
