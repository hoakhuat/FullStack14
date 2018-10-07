import React, { Component } from 'react';

import { Container } from 'reactstrap'

import Navbar from './Components/Navbar';

import NewGame from './Components/NewGame';



// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // //create timer
  // state = {
  //   now: new Date()
  // }

  // //nếu không dùng arow function => this trong phạm vi function => k set được state
  // updateTime = (time) => {
  //   this.setState({ now: time });
  // }

  // componentDidMount() {
  //   setInterval(() => {
  //     const now = new Date();
  //     this.updateTime(now)
  //   }, 1000);
  // 

  state = {
    game: null
  }

  updateGameState = (gameData) => {
    this.setState({ game: gameData })
  }

  componentDidMount(){

  }

  render() {
    const title = "Scope Keeper";
    return (

      <div className="App">
        <Container>
          <header className="App-header">
            {<Navbar title={title} />}
            {/* <Navbar title={title} time={this.state.now} /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <h1 className="App-title">Welcome to React</h1> */}

          </header>
          <div className="content">
          <NewGame updateGameState = {this.updateGameState}/>
          </div>
        </Container>
      </div>

    );
  }
}

export default App;
