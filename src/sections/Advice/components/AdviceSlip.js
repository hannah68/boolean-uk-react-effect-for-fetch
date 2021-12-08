import React from 'react'

const AdviceSlip = (props) => {
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{props.advice}</p>
            <button onClick={() => props.setTrigger(!props.trigger)}>Get More Advice</button>
            <button 
            onClick={() => props.setFavourite([...props.favourite, props.advice])}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip
