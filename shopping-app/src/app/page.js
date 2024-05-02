'use client'
import Catalog from "./components/Catalog";
import ProductCount from "./components/ProductCount";
import {data} from "./data.js";
import {useState} from "react"

export default function Home() {
  const [productList, setProductList] = useState(data);

  const title="My Products are here=>";
  const myDeleteHandler=(id)=>{
      const newList=productList.filter((p)=>{return p.id!=id});     
      setProductList(newList);
  }

  return (
    <main >
          <ProductCount productCount={productList.length}/>
          <Catalog tableHeader={title} productList={productList} onDelete={myDeleteHandler}></Catalog>
    </main>
  );
}