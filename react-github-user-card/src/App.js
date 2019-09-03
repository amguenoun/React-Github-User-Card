import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';

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
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log('App: CMD: Axios: ', err))
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
