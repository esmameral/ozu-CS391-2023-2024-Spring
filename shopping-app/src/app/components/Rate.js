'use client'
import {useState} from "react"

export default function Rate() {
    
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return (
        <div>
            <button onClick={()=>setLikeCount(likeCount+1)}>Like {likeCount} </button>
            <button onClick={()=>setDislikeCount(dislikeCount+1)}>Dislike {dislikeCount}</button>
        </div>
    );
}