'use client'
import Catalog from "./components/Catalog";
import Rate from "./components/Rate";
import Hello from "./Hello"
import { data } from './data.js';
import { useState } from 'react';
export default function Home() {

  const [productList, setProductList] = useState(data);
  const onDelete = (id) => {
    const filteredList = productList.filter((product) => {
      return product.id !== id;
    });
    setProductList(filteredList);
  }

  return (
    <main><h1>Home Page</h1>
    <Hello></Hello>
      <Rate></Rate>
      <Catalog list={productList} onDelete={onDelete}></Catalog>
    </main>
  );
}
