import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);
  

  useEffect(() => {
    const fetchAdviceData = async () => {
      try{
        const res = await fetch('https://api.adviceslip.com/advice')
        const adviceData = await res.json();
        const data = adviceData.slip;
        setAdvice(data);
      }
      catch(err){
        console.log('Error:', err);
      }
    }
    fetchAdviceData()
  }, [trigger])

  const favouriteHandler = (advice) => {
    setFavouriteList([...favouriteList, advice.advice]);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip 
          advice={advice} 
          setTrigger={setTrigger}
          trigger={trigger}
          favouriteHandler={favouriteHandler}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList 
          favouriteList={favouriteList}
        />
      </section>
    </section>
  )
}

export default AdviceSection