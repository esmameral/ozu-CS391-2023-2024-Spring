'use client'
import Rate from "./Rate";
import Link from "next/link";
export default function Catalog({tableHeader, productList, onDelete}) {

    return (<div>
        <h2>{tableHeader}</h2>
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