import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard'

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      username: 'amguenoun'
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log('App: CMD: Axios: ', err))

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log('App: CDU: Axios: ', err))
  }


  handleUserChange = (login) => {
    this.setState({ username: login });
  }

  render() {
    console.log(this.state.username)
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard user={this.state.user} key={this.state.user.id} />
        <h2>Followers: </h2>
        {this.state.followers.map(follower => <FollowerCard key={follower.id} username={follower.login} />)}
      </div>
    );
  }
}

export default App;
