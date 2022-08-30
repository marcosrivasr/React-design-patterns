import Todo from "./todo";
import { filterItems } from "./utils";

export default function TodoList({ query, dataset }) {
  const items = filterItems(query, dataset);
  return (
    <div>
      {items.map((product) => (
        <Todo
          key={product.id}
          title={product.title}
          completed={product.completed}
        />
      ))}
    </div>
  );
}
