export default function Todo({ title, completed }) {
  function handleChange() {
    //...
  }
  return (
    <div>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        {title}
      </div>
    </div>
  );
}
