import { useState } from 'react'

function CritCard({ crit, artId, username, likeCount, critId, handleDelCrit }){

    const [likes, setLikes] = useState(likeCount)
    const [theColor, setColor] = useState(getDarkColor())

    // let randomColor = Math.floor(Math.random()*16777215).toString(16);

    function getDarkColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 12)];
        }
        return color;
   }  
//    let darkColor = getDarkColor()

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
<p className='crits' style={{ color: theColor }}>{crit}</p>
<button className = 'critNameButton' style={{ background: theColor }} >{username}</button>
<span className='likes' onClick={handleLikeClick}>🖤{likes}</span>
{/* <button className='likes' id='delCritB' onClick={() => handleDelCrit(critId)}>✖</button> */}
</>
)}

export default CritCard