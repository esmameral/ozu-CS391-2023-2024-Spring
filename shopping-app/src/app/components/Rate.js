'use client'
import { useState, useEffect } from "react"

export default function Rate() {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    useEffect(
        () => { console.log("This effect will mounting phase and after likeCount or dislikeCount updated"); },
        [likeCount,dislikeCount]
     )

    

    return (
        <div>
            <button onClick={() => setLikeCount(likeCount + 1)}>Like {likeCount} </button>
            <button onClick={() => setDislikeCount(dislikeCount + 1)}>Dislike {dislikeCount}</button>
        </div>
    );
}