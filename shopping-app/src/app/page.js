'use client'
import Catalog from "./components/Catalog";
import ProductCount from "./components/ProductCount";
//import { data } from "./data.js";
import { useState, useEffect } from "react"
import {ApplicationContext} from "./components/ApplicationContext"


export default function Home() {
 const [productList, setProductList] = useState([]);
 const [dataLoaded, setDataLoaded] = useState(false);
 
 useEffect(() => { 
     if(dataLoaded==false){
      loadProducts();
     }
 }
 )
  const title = "My Products are here=>";
  const myDeleteHandler = (id) => {
    fetch(`http://localhost:8000/products/${id}`,{ method: 'DELETE' })
    .catch(error => { console.log(error) })
    setDataLoaded(false);
  }

  const loadProducts = () => {
    fetch(`http://localhost:8000/products`)
      .then(response => response.json())
      .then(data => {
        setProductList(data);
        setDataLoaded(true);
      })
      .catch(error => { console.log(error) })
  }


  return (
    <main >
      <ApplicationContext.Provider value={{ data: "Data from context!" }}>
        <ProductCount productCount={productList.length} />
        <Catalog tableHeader={title} productList={productList} onDelete={myDeleteHandler}></Catalog>
      </ApplicationContext.Provider>
    </main>
  );
}
