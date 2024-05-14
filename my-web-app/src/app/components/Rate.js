'use client'
import { useState } from 'react';

const Rate = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
 
    return (
        <>Please rate us:
            <button onClick={() => setLikeCount(likeCount+1)}>Like({likeCount})</button>
            <button onClick={() => setDislikeCount(dislikeCount+1)}>Dislike({dislikeCount})</button>
        </>
    );
}

export default Rate;