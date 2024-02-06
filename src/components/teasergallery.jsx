import '../styles/App.css'
import tripData from "/src/data/trip_data.json";
import Teaser from "./teaser.jsx";

export default function TeaserGallery() {

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tripData && tripData.map(data => <Teaser key={data.id} teaserObj={data} />)}
    </div>
  )
}
