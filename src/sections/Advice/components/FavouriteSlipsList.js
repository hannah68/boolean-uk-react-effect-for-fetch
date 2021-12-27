import React from 'react'

const FavouriteSlipsList = (props) => {
    const {favouriteList} = props;
    
    return (
        <>
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favouriteList.map((fav,index) => {
                    return <li key={index}>{fav}</li>
                })}
            </ul> 
        </>
    )
}

export default FavouriteSlipsList
