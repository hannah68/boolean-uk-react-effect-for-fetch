import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favourite, setFavourite] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAdvice(data.slip.advice);
        });
  }, [trigger]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
      advice={advice} 
      setAdvice={setAdvice}
      setFavourite={setFavourite}
      favourite={favourite}
      setTrigger={setTrigger}
      trigger={trigger}
      />

      <FavouriteSlipsList 
      favourite={favourite}/>
    </section>
  )
}

export default AdviceSection
