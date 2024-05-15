'use client'
import Rate2 from "../../components/Rate2";
import ReviewForm from "@/app/components/ReviewForm";
import { useState,useEffect } from "react";
export default function ProductDetail({params}) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [product, setProduct] = useState({});


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
            }
            )
    }

    useEffect(() => {
        loadProduct(params.productid);

    }, [params.productId]);
    
    useEffect(() => {
        loadReviews(params.productid);
    }, []);

    return (<div>
        detail page - dynamic
        <Rate2/>
     
         <p><b>Name:</b>{product.name}</p>
         <p><b>Price:</b>{product.price}</p>
         <p><b>Description:</b>{product.description}</p>
        <h3>Reviews</h3>
         <ol>
            {reviews.map((item, index) => {
                return (<>
                    <li>(<b>{item.email}</b>) : {item.body}</li>
                   
                </>
                );
            })}
        </ol>
            <ReviewForm productId={params.productid}/>
    </div>

    );
}
