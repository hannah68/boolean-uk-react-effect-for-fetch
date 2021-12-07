import React from 'react'
import { useEffect, useState } from "react"

const AdviceSlip = () => {
    const [advice, setAdvice] = useState('');

    const fetchData = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => {
                console.log(data.slip);
                setAdvice(data.slip.advice)
            })
    }

    useEffect(() => {
        fetchData()
        return(() => {
            
        })
    },[advice]);


    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={() => fetchData}>Get More Advice</button>
            <button>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip
