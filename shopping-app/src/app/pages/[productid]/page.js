import Rate2 from "../../components/Rate2";
export default function ProductDetail({params}) {
    return (<div>
        detail page - dynamic
        <Rate2/>
        <p>
         Details: {params.productid}
         </p>
    </div>

    );
}
