import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
        .then(resp => resp.json())
        .then(result => {
            console.log(result);
            setAdvice(result.slip.advice);
        });
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} setAdvice={setAdvice}/>
      <FavouriteSlipsList/>
    </section>
  )
}

export default AdviceSection
