import Todo from "./todo";

export default function TodoList({
  items,
  onComplete,
  itemsCompleted,
  totalItems,
}) {
  return (
    <div>
      <div>
        {itemsCompleted} of {totalItems} completed
      </div>
      {items.map((item) => (
        <Todo key={item.id} {...item} onCompleted={onComplete} />
      ))}
    </div>
  );
}
