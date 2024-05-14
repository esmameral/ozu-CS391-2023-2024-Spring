'use client'
const Catalog = ({list,onDelete}) => {
    //const {list}=props;
    return (<div> Catalog Page 
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {list.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><button onClick={()=>onDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            );
        })}
    </tbody>
</table>
</div>);
}
export default Catalog;