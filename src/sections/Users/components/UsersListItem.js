import React from 'react'

export const UsersListItem = ({user}) => {
    const title = user.name.title
    const name = user.name.first;
    const family = user.name.last;
    const gender = user.gender;
    return (
        <li className={gender === 'male' ? 'bg-blue' : 'bg-pink'}>
            <img
                src={user.picture.thumbnail}
                alt={`${name} ${family}`}
                />
            <h3>{`${title} ${name} ${family}`}</h3>
            <p>Email: {user.email}</p>
        </li>
    )
}
