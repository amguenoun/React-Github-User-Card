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
      input: '',
      username: 'amguenoun'
    }
  }

  componentDidMount() {
    this.runAxios();
  }


  runAxios = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log('App: CMD: Axios: ', err))

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log('App: CDU: Axios: ', err))
  }

  handleUserSubmit = (e) => {
    e.preventDefault();
    this.setState({ username: this.state.input }, this.runAxios);
  }

  handleUserChange = (e) => {
    this.setState({ input: e.target.value });
  }

  clickUserName = (name) => {
    this.setState({ username: name }, this.runAxios);
  }

  render() {
    console.log(this.state.input, this.state.username);
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <form onSubmit={this.handleUserSubmit}>
          <label htmlFor="username">Username: </label>
          <input name='username' type="text" placeholder='Github Username' value={this.state.input} onChange={this.handleUserChange} />
          <button type='submit'>Submit</button>
        </form>
        <UserCard user={this.state.user} key={this.state.user.id} clickUserName={this.clickUserName} />
        <h2>Followers: </h2>
        {this.state.followers.map(follower => <FollowerCard key={follower.id} username={follower.login} clickUserName={this.clickUserName} />)}
      </div>
    );
  }
}

export default App;
