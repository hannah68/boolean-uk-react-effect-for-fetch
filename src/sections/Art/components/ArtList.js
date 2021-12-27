import React from 'react'
import ArtListItem from './ArtListItem'

const ArtList = (props) => {
    const {config, artWorks} = props;

    return (
        <ul className="art-list">
            {artWorks.map((item, index) => {
                return <ArtListItem key={index} item={item} config={config}/>
            })}
        </ul>
    )
}

export default ArtList
