import { createContext, useContext, useEffect, useState } from "react";

// 1. Definicion de contexto
const AppContext = createContext({
  items: [],
  onComplete: (id) => {},
});

// 2.Implementación
export default function Store({ children }) {
  const [items, setItems] = useState([
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
  ]);

  function onComplete(id) {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    setItems([...items]);
  }

  return (
    <AppContext.Provider
      value={{
        items,
        onComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

//función para acceder al contexto
export function useAppContext() {
  return useContext(AppContext);
}
