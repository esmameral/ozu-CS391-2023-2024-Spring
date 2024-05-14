'use client'
import {useReducer } from "react"
const initialValues = { likeCount: 0, dislikeCount: 0 }
function reducerFunction(currentState, action) {
    switch (action.type) {
        case "like":
            return {
                likeCount: currentState.likeCount + 1,
                dislikeCount: currentState.dislikeCount
            }
        case "dislike":
            return {
                likeCount: currentState.likeCount,
                dislikeCount: currentState.dislikeCount + 1
            }
        default:
            return currentState;

    }

}

export default function Rate() {
    const [state, dispatch] = useReducer(reducerFunction, initialValues);

    return (
        <div>
            <button onClick={() => dispatch({ type: 'like' })}>Like {state.likeCount} </button>
            <button onClick={() => dispatch({ type: 'dislike' })}>Dislike {state.dislikeCount}</button>
        </div>
    );
}