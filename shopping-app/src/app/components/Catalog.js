'use client'
import Rate from "./Rate";
import Link from "next/link";
import {useContext} from "react";
import {ApplicationContext} from "./ApplicationContext"

export default function Catalog({tableHeader, productList, onDelete}) {
    const contextObject = useContext(ApplicationContext);

    return (<div>
        <h2>{tableHeader}</h2>
        <h3>{contextObject.data}</h3>
        <table>
            <thead>
            <tr><th>Name</th><th>Price</th><th>Description</th></tr>
            </thead>
            <tbody>
            {productList.map((item, index) => {
                return (<tr key={index}>
                    <td>
                      <Link href={"/pages/"+item.id}>{item.name}</Link>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                    <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </td>
                    <td><Rate/></td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>

    );
}