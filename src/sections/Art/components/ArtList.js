import React from 'react'
import ArtListItem from './ArtListItem'

const ArtList = (props) => {

    return (
        <ul className="art-list">
          {props.artData.map(art => {
              return (<ArtListItem art={art} key={art.image_id}
              />)
          })}
        </ul>
    )
}

export default ArtList
