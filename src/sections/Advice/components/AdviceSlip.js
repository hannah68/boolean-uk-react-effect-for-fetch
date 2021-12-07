import React from 'react'

const AdviceSlip = (props) => {
    const clickAdviceHandler = async () => {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        props.setAdvice(data.slip.advice);
    }

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{props.advice}</p>
            <button onClick={()=> clickAdviceHandler()}>Get More Advice</button>
            <button 
            onClick={() => props.setFavourite([...props.favourite, props.advice])}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip
