import { useState, useEffect, useMemo } from "react";
import TodoList from "./todoList";

const data = [
  {
    id: 0,
    title: "Lavar la ropa",
    completed: false,
  },
  {
    id: 1,
    title: "Pasear a Coqui 🐶",
    completed: true,
  },
  {
    id: 2,
    title: "Terminar tutorial",
    completed: false,
  },
];

export default function TodoContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Obtener y asignar datos
    setItems(data);
  }, []);

  /**
   * Cambia el estado de completed
   * @param {number} id
   */
  function handleComplete(id) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  const itemsCompleted = useMemo(() => {
    return items.filter((item) => item.completed).length;
  });

  return (
    <TodoList
      items={items}
      onComplete={handleComplete}
      itemsCompleted={itemsCompleted}
      totalItems={items.length}
    />
  );
}
