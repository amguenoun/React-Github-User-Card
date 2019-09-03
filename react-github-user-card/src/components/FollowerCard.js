import React from 'react';
import axios from 'axios';

import UserCard from './UserCard'

class FollowerCard extends React.Component {
    constructor() {
        super();
        this.state = {
            follower: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.username}`)
            .then(res => this.setState({ follower: res.data }))
            .catch(err => console.log('App: CMD: Axios: ', err))
    }

    render() {
        return (
            <UserCard user={this.state.follower} key={this.state.follower.id} />
        )
    }
}

export default FollowerCard;
