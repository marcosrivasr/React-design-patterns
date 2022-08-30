import { useAppContext } from "./store";
export default function Todo({ id, title, completed }) {
  const store = useAppContext();
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => store.onComplete(id)}
        />
        {title}
      </div>
    </div>
  );
}
