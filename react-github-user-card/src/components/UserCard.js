import React from 'react'

const UserCard = (props) => {
    return (
        <div>
            <div>
                <img src={props.user.avatar_url} alt="user avatar" />
            </div>
            <div>
                <h2>{props.user.name}</h2>
                <h4>{props.user.login}</h4>
                <p>Location: {props.user.location}</p>
                <p>Bio: {props.user.bio}</p>
                <p>Followers: {props.user.followers}</p>
            </div>

        </div>
    );
}

export default UserCard;
