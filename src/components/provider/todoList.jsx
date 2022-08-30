import Todo from "./todo";

export default function TodoList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}
