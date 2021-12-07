import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAdvice(data.slip.advice);
        });
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
      advice={advice} 
      setAdvice={setAdvice}
      setFavourite={setFavourite}
      favourite={favourite}
      />

      <FavouriteSlipsList 
      favourite={favourite}/>
    </section>
  )
}

export default AdviceSection
