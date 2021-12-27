import React from 'react'
import UsersListItem from './UsersListItem';

const UsersList = (props) => {
    const {userData} = props;
    return (
        <ul className="users-list">
            {userData.map((user,index) => {
                return <UsersListItem key={index} user={user}/>
            })}
        </ul>
    )
}

export default UsersList
