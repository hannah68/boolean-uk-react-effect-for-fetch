import React from 'react'
import SubjectList from './SubjectList'

const ArtListItem = (props) => {
    const url = "https://www.artic.edu/iiif/2"
    const urlId = props.art['image_id'];

    return (
        <li key={props.art.id}>
            <div className="frame">
                <img 
                src={`${url}/${urlId}/full/843,/0/default.jpg`}
                alt={props.art.title}/>
            </div>
            <h3>{props.art.title}</h3>
            <p>Artist: {props.art.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <SubjectList art={props.art} />
        </li>
    )
}

export default ArtListItem
