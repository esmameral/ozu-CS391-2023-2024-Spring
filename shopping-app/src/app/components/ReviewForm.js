import { useState } from "react";

export default function ReviewForm({ productId }) {

  const [reviewText, setReviewText] = useState("");

    
  const handleAdd = () => {
    var reviewObject = {
      "productId": productId,
      "body": reviewText
    }
    fetch(`http://localhost:8000/reviews`, { 
             method: 'POST',
             body:JSON.stringify(reviewObject),
    headers: new Headers({
      'Content-Type': 'application/json'})
     })
      .catch(error => { console.log(error) })
    console.log(reviewText);
    console.log(reviewObject);
  }
  return (
    <div>
      <textarea
        name="review"
        value={reviewText}
        onChange={(e) => { setReviewText(e.target.value) }}
        rows="2" cols="100"
      />
      <br />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
}
