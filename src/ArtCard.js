import { useState } from 'react'
import CritCard from './CritCard'

function ArtCard({crits, title, artist, url, description, id, yearMade, handleDeleteArtwork }){


    const [criting, setCriting] = useState(false)
    const [newCrit, setNewCrit] = useState('')
    const [newName, setNewName] = useState('')
    const [critList, setCritList] = useState(crits)


const interpretations = critList.map((inter)=> <CritCard crit={inter.crit} username={inter.username} likeCount={inter.like_count} artId={inter.artwork_id} key={inter.id} critId={inter.id} />)


function handleAddNewCrit(){
// nav to new crit page with just image and text box
setCriting(true)
}

function handleCancelCrit(){
    setCriting(false)
}

function handlePublishCrit(){
// create new interpretation
fetch(`http://localhost:9393/interpretations`, {  method: "POST",  
    headers: {    "Content-type": "application/json"  },  
    body: JSON.stringify({    
        crit: newCrit, 
        artwork_id: id,
        username: newName    
    })})
    .then(r => r.json())
    .then(d=>{
        console.log(d)
        setNewCrit('')
        setCriting(false)
        setCritList([...critList, d])
    })
}


function handleCritChange(e){
setNewCrit(e.target.value)
}


function handleNameChange(e){
setNewName(e.target.value)
}


    return(
<div>
 <div className="vert">
  <div className="container">
    <img src={url} alt="art!" />
    <h3><span className="artist">{artist}</span><br></br><span className="title">"{title}" </span><br></br><span className="sml" >{yearMade}</span><span id='desc'>{description}</span></h3>
  </div>
  {/* <p className='del' onClick={handleDeleteArtwork}>ⓧ</p> */}
  {/* <h5>interpretations, comments, critiques...</h5> */}
  {criting === true ? <>
    <form>
    <label>
     your critique:
    <input
    type='text'
    value={newCrit}
    onChange={handleCritChange}
    />
    </label>
    <label>
        your name:
    <input
    type='text'
    value={newName}
    onChange={handleNameChange}
    />
    </label>
</form>
  <button className="centered" onClick={handlePublishCrit}>publish</button>
  <button className="centered" id='cancelB' onClick={handleCancelCrit}>cancel</button>

  </>
  : <>
  {interpretations }
  <button className="centered" id='newCritButton' onClick={handleAddNewCrit}>add new crit</button>
  </>
}
  {/* <h2>become a critic</h2> */}
 </div>
</div>
    )
}

export default ArtCard