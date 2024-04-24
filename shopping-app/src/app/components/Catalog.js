import Rate from "./Rate";
export default function Catalog(props) {
    const { tableHeader, productList } = props;

    return (<div>
        <h2>{tableHeader}</h2>
        <table>
            <tr><th>Name</th><th>Price</th><th>Description</th></tr>
            {productList.map((item, index) => {
                return (<tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><Rate/></td>
                </tr>
                );
            })}
        </table>
    </div>

    );
}