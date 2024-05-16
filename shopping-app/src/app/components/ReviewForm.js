import { useState } from "react";

export default function ReviewForm({ productId,onAddReview }) {

  const [newReviewObject, setNewReviewObject] = useState({"productId": productId});
  
  const handleAddReview =()=>{

    onAddReview(newReviewObject);
    setNewReviewObject({"productId": productId,"reviewText":""}

    )
  }

    
  
  return (
    <div>
      <textarea
        name="review"
        value={newReviewObject.reviewText}
        onChange={(e) => { 
          setNewReviewObject({"productId": productId,"reviewText":e.target.value})
        }}
        rows="2" cols="100"
      />
      <br />
      <button onClick={() =>handleAddReview() }>Add</button>
    </div>
  );
}
