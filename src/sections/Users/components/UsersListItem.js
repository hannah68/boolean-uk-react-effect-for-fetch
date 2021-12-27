import React from 'react'

const UsersListItem = (props) => {
    const {user} = props;
    const {title, first, last} = props.user.name;
    return (
        <li className={user.gender === 'female' ? 'bg-pink' : 'bg-blue'}>
            <img
            src={`${user.picture.thumbnail}`}
            alt={`${first} ${last}`}
            />
            <h3>{title} {first} {last}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}

export default UsersListItem
