'use client'
import Rate from "./Rate";
import Link from "next/link";
import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext"
import { Button, Table } from 'reactstrap';

export default function Catalog({ tableHeader, productList, onDelete }) {
    const contextObject = useContext(ApplicationContext);

    return (<div>
        <h3>{tableHeader}</h3>
        <h5>{contextObject.data}</h5>
        <Table bordered hover responsive striped>
            <thead>
                <tr><th>Name</th><th>Price</th><th>Description</th><th>Delete</th><th>Operations</th></tr>
            </thead>
            <tbody>
                {productList.map((item, index) => {
                    return (<tr key={index}>
                        <td>
                            <Link href={"/pages/" + item.id}>{item.name}</Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <Button onClick={() => onDelete(item.id)} color="danger" size="sm">Delete</Button>
                        </td>
                        <td><Rate /></td>
                    </tr>
                    );
                })}
            </tbody>
            </Table>
        
    </div>

    );
}