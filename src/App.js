import './App.css';
import { useEffect, useState } from 'react'
import ArtCard from './ArtCard'

function App() {

 const [artworks, setArtworks] = useState ([])

useEffect( () => {
fetch('http://localhost:9393/artworks')
.then(r => r.json())
.then(data => setArtworks(data))
}, [])

function handleDeleteArtwork(id){
  console.log('deleeeeting')
// fetch(`http://localhost:9393/artworks/${id}`, { method: "DELETE" })
// .then(r => r.json())
// .then(data => console.log(data))
}

const artworkCollection = artworks.map( (art) => <ArtCard crits={art.interpretations} title={art.title} artist={art.artist} url={art.url} yearMade={art.year} description={art.description} id={art.id} key={art.id} handleDeleteArtwork={handleDeleteArtwork}/> )


  return (
    <>
    <div className="vert">
        <h1 id='wb' >everyone's a critic</h1>
      <h4 id='wb' >a website by Jarad Solomon 2021</h4>
      <div className="app">
        {artworkCollection}
      </div>
      {/* <button className="artAdd" >upload an artwork</button>  */}
    </div>
    </>
  );
}

export default App;
