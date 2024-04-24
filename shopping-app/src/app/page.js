import Catalog from "./components/Catalog";
import {data} from "./data.js";
export default function Home() {
  const title="My Products are here";
  return (
    <main >
          <Catalog tableHeader={title} productList={data}></Catalog>
    </main>
  );
}
