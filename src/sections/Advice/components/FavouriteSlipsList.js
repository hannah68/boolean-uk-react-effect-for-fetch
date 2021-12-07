import React from 'react'

const FavouriteSlipsList = (props) => {
    return (
        <section className="favourtite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {props.favourite.map((fav, index) => {
                    return <li key={index}>{fav}</li>
                })}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList
