export function filterItems(query, items) {
  if (query === "") {
    return items;
  }
  return items.filter((item) => item.title.indexOf(query) === 0);
}
