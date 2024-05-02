export default function ProductDetail({params}) {
    return (<div>
        detail page - dynamic
        <p>
         Details: {params.productid}
         </p>
    </div>

    );
}
