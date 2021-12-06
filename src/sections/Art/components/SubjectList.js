import React from 'react'

const SubjectList = (props) => {
    return (
        <ul>
            {props.art.subject_titles.map((subject, index)=> {
                return <li key={index}>{subject}</li>
            })}
        </ul>
    )
}

export default SubjectList
