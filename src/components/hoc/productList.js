import Product from "./product";
import { filterItems } from "./utils";

export default function ProductList({ query, dataset }) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Product key={product.id} title={product.title} />
      ))}
    </div>
  );
}
