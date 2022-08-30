import { createContext, useContext, useEffect, useState } from "react";

// 1. Definicion de contexto
const AppContext = createContext({
  selected: "",
  onSelect: (title) => {},
  showSelected: () => {},
});

// 2.Implementación
export default function Store({ children }) {
  const [selected, setSelected] = useState("");

  function onSelect(title) {
    setSelected(title);
  }

  function showSelected() {
    return selected !== "" ? "Item selected: " + selected : "No item selected";
  }

  return (
    <AppContext.Provider
      value={{
        selected,
        onSelect,
        showSelected,
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
