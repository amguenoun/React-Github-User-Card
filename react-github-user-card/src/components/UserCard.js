import React from 'react'

const UserCard = (props) => {
    return (
        <div className="user-card" onClick={() => props.clickUserName(props.user.login)}>
            <div className="img-div">
                <img src={props.user.avatar_url} alt="user avatar" />
            </div>
            <div className="text-div">
                <h2>{props.user.name}</h2>
                <h4>{props.user.login}</h4>
                <p>Profile: <a target='blank' href={props.user.html_url}>{props.user.html_url}</a></p>
                <p>Location: {props.user.location === null ? "N/A" : props.user.location}</p>
                <p>Bio: {props.user.bio === null ? "N/A" : props.user.bio}</p>
                <p>Followers: {props.user.followers}</p>
            </div>

        </div>
    );
}

export default UserCard;
