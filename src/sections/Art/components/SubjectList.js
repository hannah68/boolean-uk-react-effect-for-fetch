import React from 'react'

const SubjectList = (props) => {
    const {item} = props;
    return (
        <ul>
            {item.subject_titles ? item.subject_titles.map((el, index) => {
                return <li key={index}>{el}</li>
            }): ''}
        </ul>
    )
}

export default SubjectList
