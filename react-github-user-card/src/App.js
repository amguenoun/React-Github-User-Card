import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      username: 'amguenoun'
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => console.log(res.data))
      .catch(err => console.log('App: CMD: Axios: ', err))
  }

  render() {
    return (
      <div className="App">
        <p>Yo</p>
      </div>
    );
  }
}

export default App;
