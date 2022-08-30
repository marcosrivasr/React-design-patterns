export default function Todo({ id, title, completed, onCompleted }) {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => onCompleted(id)}
        />
        {title}
      </div>
    </div>
  );
}
