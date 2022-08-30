import { useState, useEffect } from "react";
import TodoList from "./todoList";
import { useAppContext } from "./store";

export default function TodosView() {
  const store = useAppContext();

  return <TodoList items={store.items} />;
}
