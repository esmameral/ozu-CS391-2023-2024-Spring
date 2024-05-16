'use client'
import { useState, useEffect } from "react"
import { Button } from 'reactstrap';


export default function Rate() {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    useEffect(
        () => { console.log("This effect will mounting phase and after likeCount or dislikeCount updated"); },
        [likeCount,dislikeCount]
     )

    

    return (
        <div>
            
            <Button onClick={() => setLikeCount(likeCount + 1)} color="success" size="sm">+{likeCount} </Button>
            <Button onClick={() => setDislikeCount(dislikeCount + 1)} color="warning" size="sm">-{dislikeCount}</Button>
        </div>
    );
}