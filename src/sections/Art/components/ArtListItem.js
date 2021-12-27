import React from 'react'
import SubjectList from './SubjectList'

const ArtListItem = (props) => {
    const {item, config} = props;
    return (
        <li>
            <div className="frame">
                <img
                    src={`${config}/${item.image_id}/full/843,/0/default.jpg`}
                    alt={item.title}
                />
            </div>
            <h3>{item.title}</h3>
            <p>Artist: {item.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <SubjectList item={item}/>
        </li>
    )
}

export default ArtListItem
