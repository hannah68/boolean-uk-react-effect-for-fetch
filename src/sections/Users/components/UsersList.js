import React from 'react'
import { UsersListItem } from './UsersListItem'


const UsersList = ({userInfo}) => {
    return (
        <ul className="users-list">
            {userInfo.map((user, index) => {
                return <UsersListItem user={user} key={index}/>
            })}
        </ul>
    )
}

export default UsersList
