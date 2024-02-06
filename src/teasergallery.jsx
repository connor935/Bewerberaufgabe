import './App.css'
import Teaser from "./teaser.jsx";

function TeaserGallery() {

  return (
    <div className="w-16 md:w-32 lg:w-48 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Teaser />
      <Teaser />
      <Teaser />
    </div>
  )
}

export default TeaserGallery
