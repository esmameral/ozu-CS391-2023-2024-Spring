'use client'
import Rate2 from "../../components/Rate2";
import ReviewForm from "@/app/components/ReviewForm";
import { useState,useEffect } from "react";
export default function ProductDetail({params}) {

    const [loadReviewsRequired, setLoadReviewsRequired] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [product, setProduct] = useState({});
    const [reviewsLoaded, setReviewsLoaded] = useState(false);
 
    

    const loadProduct = (id) => {
        fetch(`http://localhost:8000/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => { console.log(error) })
    }

    const loadReviews = (productId) => {
        fetch(`http://localhost:8000/reviews?productId=${productId}`)
            .then(response => response.json())
            .then(data => {
                setReviews(data);
                setReviewsLoaded(true);
            }
        )
    }

    const addReview =(review)=>{
        const options={ 
          method: 'POST',
          body:JSON.stringify(review),
          headers: new Headers({'Content-Type': 'application/json'})
         }
        fetch(`http://localhost:8000/reviews`,options )
        .then(response => response.json())
        .then(()=>console.log(data))
        .catch(error => { console.log(error) })
        setReviewsLoaded(false);
    }

    useEffect(() => {
        loadProduct(params.productid);

    }, [params.productId]);
    
    

    useEffect(() => { 
        if(reviewsLoaded==false){
            loadReviews(params.productid);
        }
    }
    )
    return (<div>
        
        <Rate2/>
     
         <p><b>Name:</b>{product.name}</p>
         <p><b>Price:</b>{product.price}</p>
         <p><b>Description:</b>{product.description}</p>
        <h3>Reviews</h3>
         <ol>
            {reviews.map((item, index) => {
                return (<>
                    <li>{item.reviewText}</li>
                   
                </>
                );
            })}
        </ol>
            <ReviewForm productId={params.productid} onAddReview={addReview}/>
    </div>

    );
}
