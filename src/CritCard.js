import { useState } from 'react'

function CritCard({ crit, artId, username, likeCount, critId }){

    const [likes, setLikes] = useState(likeCount)

    function handleLikeClick(){
    const newnum = likes + 1
    setLikes(newnum)
    fetch(`http://localhost:9393/interpretations/${critId}`, {  method: "PATCH",  
    headers: {    "Content-type": "application/json"  },  
    body: JSON.stringify({    
        like_count: newnum,   
    })})
    .then(r => r.json())
    .then(d=>{
        console.log(d)
    })
    }

return (
<>
<p className='crits' >{crit}</p>
<button className = 'critNameButton'>{username}</button>
<span className='likes' onClick={handleLikeClick}>🖤{likes}</span>
</>
)}

export default CritCard