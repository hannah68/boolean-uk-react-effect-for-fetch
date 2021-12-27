import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [config, setConfig] = useState('');
  const [artWorks, setArtWorks] = useState([]);


  useEffect(() => {
    const fetchArtData = async () => {
      try{
        const res = await fetch('https://api.artic.edu/api/v1/artworks')
        const artData = await res.json()
        const config = artData.config.iiif_url;
        setConfig(config);
        const data = artData.data;
        setArtWorks(data)
      }
      catch(err){
        console.log('error:', err);
      }
      
    }
    fetchArtData()
  }, [])


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artWorks={artWorks} config={config}/>
      </div>
    </section>
  )
}

export default ArtsSection