import React from 'react'

const AdviceSlip = (props) => {
    const {advice, setTrigger, trigger, favouriteHandler} = props;

    return (
        <>
            <h3>Some Advice</h3>
            <p>{advice.advice}</p>
            <button onClick={() => setTrigger(!trigger)}>Get More Advice</button>
            <button onClick={() => favouriteHandler(advice)}>Save to Favourties</button> 
        </>
    )
}

export default AdviceSlip
