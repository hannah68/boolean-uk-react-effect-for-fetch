import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(()=> {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(res => res.json())
      .then(allData => {
        setArtData(allData.data)
      })
  },[]);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData}/>
      </div>
    </section>
  )
}

export default ArtsSection
